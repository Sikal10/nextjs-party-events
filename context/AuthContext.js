import {createContext, useState, useEffect} from "react";
import {NEXT_URL} from "../config";
import axios from "axios";
import {useRouter} from "next/router";


const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const router = useRouter();

    useEffect(() => checkUserLoggedIn(), [])


    //register user
    const register = async (user) => {
        console.log(user);
    }

    //login user
    const login = async ({email: identifier, password}) => {
        const res = await fetch(`${NEXT_URL}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                identifier,
                password,
            }),
        })

        const data = await res.json()

        if (res.ok) {
            setUser(data.user);
            await router.push("/account/dashboard")
        } else {
            setError(data.message)
            setError(null)
        }
    }


//logout user
    const logout = async () => {
        console.log("logout")
    }

//check if user is logged in
    const checkUserLoggedIn = async (user) => {
        const {data} = await axios.get(`${NEXT_URL}/api/user`);
        if (data) {
            setUser(data.user);
        } else {
            setUser(null);
        }
    }

    return <AuthContext.Provider value={{user, error, register, login, logout}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext;