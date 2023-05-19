import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthPrividers = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoding] = useState(true)

    const cretUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = ()=>{
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        cretUser,
        signIn,
        logOut
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
            setLoding(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPrividers;