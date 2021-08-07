import Link from "next/link";
import {useEffect, useState} from "react";
import classes from "./login.module.css";
import {FaUser} from "react-icons/fa";
import {useContext} from "react";
import AuthContext from "../../context/AuthContext";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {error, login} = useContext(AuthContext);

    useEffect(() => {
        error && toast.error(error)
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Clicked")
        login({email, password});
    }

    return (
        <div className={classes.form}>
            <h1><FaUser /> Log In</h1>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} required type="email"/>
                </div>
                
                <div>
                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} required type="password"/>
                </div>

                <input type="submit" value="submit" className={"btn"}/>

            </form>

            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p>Don't have an account? <Link href={"/account/register"}>Register</Link> </p>
        </div>
    );
};

export default Login;