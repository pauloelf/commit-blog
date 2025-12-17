import { useQuery } from "@tanstack/react-query"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "@/lib/firebase"

async function fetchPost<T>(slug: string) {
  const postsRef = collection(db, "posts")

  const q = query(postsRef, where("slug", "==", slug))

  const snapshot = await getDocs(q)

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as T
}

export function usePost<T>(slug: string) {
  return useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost<T>(slug),
    staleTime: 1000 * 60 * 5,
    retry: 1,
    refetchOnWindowFocus: false,
  })
}
