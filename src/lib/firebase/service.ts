import { getDocs, getFirestore, collection, getDoc, doc } from "firebase/firestore";
import app from "./init";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const getData = async (collectionName: string) => {
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))

        return data; // bisa dipakai di API handler atau di komponen

    } catch (e) {
        console.error("Error getting documents: ", e);
        throw e; // lempar error biar bisa ditangkap di pemanggil
    }
};

export const getDataById = async (collectionName: string, id: string) => {
    try {
        const docRef = doc(db, collectionName, id);
        const docSnap = await getDoc(docRef);
        return docSnap.data()

    } catch (e) {
        console.error("Error getting document by ID:", e);
        throw e;
    }
};