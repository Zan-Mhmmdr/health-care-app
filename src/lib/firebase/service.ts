import { getDoc, getFirestore, collection } from "firebase/firestore";
import app from "./init";

const firestore = getFirestore(app)

export const retrieveData = async (collection: string) => {
    const snapshot = await getDoc(collection(firestore, collectionName));
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))

    return data
}

export const retrieveDataById = async (collectionName) => {
    const snapshot = await getDoc(doc(firestore, collectionName, id))
    const data = snapshot.data()
    return data
}