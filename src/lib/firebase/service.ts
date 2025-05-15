import { addDoc, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
import app from "./init";


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const getData = async (collectionName: string,) => {
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }))

        return data; // bisa dipakai di API handler atau di komponen
    } catch (e) {
        console.error("Error getting documents: ", e);
        throw e; // lempar error biar bisa ditangkap di pemanggil
    }
};

export const getDataById = async (collectionName: string, id: string) => {
    try {
        const snapshot = await getDoc(doc(db, collectionName, id));
        const data = snapshot.data()
        return data

    } catch (e) {
        console.error("Error getting document: ", e);
        throw e;
    }
}

export const register = async (email: string, name: string, password: string) => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            email,
            name,
            password
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
