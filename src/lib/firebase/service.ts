import { addDoc, doc, getDoc, getDocs, getFirestore, query, updateDoc, where, collection } from "firebase/firestore";
import bcrypt from "bcrypt";
import app from "./init";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const getData = async (collectionName: string) => {
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return data;
    } catch (e) {
        console.error("Error getting documents: ", e);
        throw e;
    }
};

export const getDataById = async (collectionName: string, id: string) => {
    try {
        const snapshot = await getDoc(doc(db, collectionName, id));
        return snapshot.data();
    } catch (e) {
        console.error("Error getting document: ", e);
        throw e;
    }
};

export const register = async (data: {
    fullname: string;
    email: string;
    password: string;
    role?: string;
}): Promise<{ status: number; message: string }> => {
    try {
        const q = query(collection(db, "users"), where("email", "==", data.email));
        const snapshot = await getDocs(q);
        const users = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        if (users.length > 0) {
            return { status: 400, message: "Email already exists" };
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;
        data.role = "admin";

        await addDoc(collection(db, "users"), data);

        return { status: 200, message: "Register success" };
    } catch (error) {
        console.error("Error in register:", error);
        return { status: 500, message: "Register failed" };
    }
};

export const login = async (data: { email: string; password: string }) => {
    try {
        const q = query(collection(db, "users"), where("email", "==", data.email));
        const snapshot = await getDocs(q);

        if (snapshot.empty) return null;

        const userDoc = snapshot.docs[0];
        const user = userDoc.data();

        console.log("User data:", user);

        if (!user.password || typeof user.password !== "string") {
            console.log("User password missing or invalid");
            return null;
        }

        const passwordMatch = await bcrypt.compare(data.password, user.password);
        if (!passwordMatch) return null;

        return {
            id: userDoc.id,
            ...user,
        };
    } catch (err) {
        console.error("🔥 Firestore login error:", err);
        return null;
    }
};

export const loginWithGoogle = async (
    data: { email: string; name?: string; role?: string },
    callback: (result: { status: boolean; data: any }) => void
) => {
    try {
        const q = query(collection(db, "users"), where("email", "==", data.email));
        const snapshot = await getDocs(q);
        const user = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        if (user.length > 0) {
            await updateDoc(doc(db, "users", user[0].id), data);
            return callback({ status: true, data: data });
        } else {
            data.role = "member";
            await addDoc(collection(db, "users"), data);
            return callback({ status: true, data: data });
        }
    } catch (error) {
        console.error("Error in loginWithGoogle:", error);
        return callback({ status: false, data: null });
    }
};
