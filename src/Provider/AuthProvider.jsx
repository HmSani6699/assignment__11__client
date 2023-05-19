import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthPrividers = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoding] = useState(true)


    // Creat new user
    const cretUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Sign in user
    const signIn = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Googel log in user
    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // Github login
    const  githubProvider= new GithubAuthProvider()
    const githubLogin = ()=>{
        return signInWithPopup(auth,githubProvider)
    }

    // Update useer Profile
    const profileUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }


    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        cretUser,
        signIn,
        googleLogin,
        githubLogin,
        profileUpdate,
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