import { keepPreviousData, useQuery } from "@tanstack/react-query"
import {
  collection,
  getCountFromServer,
  getDocs,
  limit,
  orderBy,
  type QueryConstraint,
  query,
  startAfter,
  where,
} from "firebase/firestore"
import { db } from "@/lib/firebase"

const PAGE_SIZE = 6

interface FetchPostsParams {
  category?: string
  currentPage?: number
}

async function fetchPosts<T>({ category, currentPage = 1 }: FetchPostsParams) {
  const postsRef = collection(db, "posts")

  const baseConstraints: QueryConstraint[] = [orderBy("createdAt", "desc")]

  if (category && category !== "todos") {
    baseConstraints.unshift(where("category", "==", category))
  }

  const countQuery = query(postsRef, ...baseConstraints)
  const countSnapshot = await getCountFromServer(countQuery)

  const totalItems = countSnapshot.data().count
  const pageCount = Math.ceil(totalItems / PAGE_SIZE)

  let cursor = null

  if (currentPage > 1) {
    const prevQuery = query(
      postsRef,
      ...baseConstraints,
      limit(PAGE_SIZE * (currentPage - 1)),
    )

    const prevSnapshot = await getDocs(prevQuery)
    cursor = prevSnapshot.docs[prevSnapshot.docs.length - 1]
  }

  const postsQuery = query(
    postsRef,
    ...baseConstraints,
    ...(cursor ? [startAfter(cursor)] : []),
    limit(PAGE_SIZE),
  )

  const snapshot = await getDocs(postsQuery)

  const posts = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as T

  return {
    data: posts,
    meta: {
      pagination: {
        page: currentPage,
        pageSize: PAGE_SIZE,
        pageCount,
      },
    },
  }
}

export function usePosts<T>(category?: string, currentPage?: number) {
  return useQuery({
    queryKey: ["posts", category, currentPage],
    queryFn: () => fetchPosts<T>({ category, currentPage }),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
    retry: 1,
    refetchOnWindowFocus: false,
  })
}
