import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./firebase"

export async function fetchPost<T>(slug: string) {
  const postsRef = collection(db, "posts")

  const q = query(postsRef, where("slug", "==", slug))

  const snapshot = await getDocs(q)

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as T
}
