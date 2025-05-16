import { addDoc, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import bcrypt from "bcrypt";
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

export const register = async (
    data: {
        fullname: string;
        email: string;
        password: string;
        role?: string;
    },
    callback: Function) => {
    try {
        const q = query(
            collection(db, "users"),
            where('email', '==', data.email),
        )
        const snapshot = await getDocs(q)
        const users = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }))

        if (users.length > 0) {
            callback(false)
            return
        } else {
            data.role = "member"
            data.password = await bcrypt.hash(data.password, 10)

            await addDoc(collection(db, "users"), data).then(
                callback({ status: true, messege: 'Register success' }))
        }

    } catch (e) {
        callback({ status: false, messege: 'Register failed' })
        console.error("Error adding document: ", e);
    }
}
