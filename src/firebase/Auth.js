import { createContext, useContext, useEffect, useMemo, useState } from "react";
import app from "./FirebaseConfig";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext();

export default function AuthProvider({children}) {
    const [ currentUser, setCurrentUser ] = useState();
    const [ loading, setLoading ] = useState(true);
    const auth = getAuth(app);

    const signIn = async (email, pass) => {
        await signInWithEmailAndPassword(auth, email, pass).then((userCredentials) => {
            setCurrentUser(userCredentials.user.uid);
            window.localStorage.setItem("token", userCredentials.user.uid);
        });
    };

    useEffect(() => {
        const initialState = () => {
            return window.localStorage.getItem("token") ? window.localStorage.getItem("token") : null;
        }
        
        if(initialState()){
            const auth = getAuth(app);
            onAuthStateChanged(auth, (user) => {
                window.localStorage.setItem("token", user.uid);
                setCurrentUser(user.uid);
                setLoading(false);
            });
        }else{
            setLoading(false);
        }
    }, []);

    const contextValue = useMemo(() => {
        return {
          currentUser,
          setCurrentUser,
          signIn
        };
      }, [currentUser]);

    return (
        <AuthContext.Provider value={contextValue}>
            {loading ? <div>Cargando...</div> : children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);