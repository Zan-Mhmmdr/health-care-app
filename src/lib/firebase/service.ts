import { addDoc, doc, getDoc, getDocs, getFirestore, query, updateDoc, where } from "firebase/firestore";
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

export const register = async (data: {
    fullname: string;
    email: string;
    password: string;
    role?: string;
}): Promise<{ status: number; message: string }> => {
    try {
        const q = query(
            collection(db, "users"),
            where('email', '==', data.email)
        );

        const snapshot = await getDocs(q);
        const users = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        if (users.length > 0) {
            return { status: 400, message: 'Email already exists' };
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;
        data.role = "admin";

        await addDoc(collection(db, "users"), data);

        return { status: 200, message: 'Register success' };
    } catch (error) {
        console.error('Error in register:', error);
        return { status: 500, message: 'Register failed' };
    }
};

export const login = async (data: { email: string; password: string }) => {
    try {
        const q = query(
            collection(db, 'users'),
            where('email', '==', data.email)
        );

        const snapshot = await getDocs(q);

        if (snapshot.empty) return null;

        const userDoc = snapshot.docs[0];
        const user = userDoc.data();

        const passwordMatch = await bcrypt.compare(data.password, user.password);
        if (!passwordMatch) return null;

        return {
            id: userDoc.id,
            ...user
        };
    } catch (err) {
        console.error("🔥 Firestore login error:", err);
        return null;
    }
};


export const loginWithGoogle = async (data: any) => {
    const q = query(
        collection(db, 'users'),
        where('email', '==', data.email)
    );

    const snapshot = await getDocs(q);
    const user = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    }));

    if (user.length > 0) {
        await updateDoc(doc(db, 'users', user[0].id), data)
    }
}