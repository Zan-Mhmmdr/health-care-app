import app from "./init";
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";

const db = getFirestore(app)

export const getData = async (collectionName: string) => {
    const snapshot = await getDocs(collection(db, collectionName))
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }))

    return data
}

export const getDataById = async (collectionName: string, id: string) => {
    const snapshot = await getDoc(doc(db, collectionName, id))
    const data = snapshot.data()
    return data

}