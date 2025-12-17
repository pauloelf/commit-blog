import { useQuery } from "@tanstack/react-query"
import { collection, getDocs, query } from "firebase/firestore"
import { db } from "@/lib/firebase"

async function fetchCategories<T>() {
  const categoriesRef = collection(db, "categories")

  const q = query(categoriesRef)

  const snapshot = await getDocs(q)

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as T
}

export function useCategories<T>() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchCategories<T>(),
    staleTime: 1000 * 60 * 5,
    retry: 1,
    refetchOnWindowFocus: false,
  })
}
