import classes from "./register.module.css";
import {FaUser} from "react-icons/fa";
import Link from "next/link";
import {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("passwords do not match");
            return;
        }
    }

    return (
        <div className={classes.register}>
            <h1><FaUser className={classes.icon}/> Register</h1>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input required value={name} onChange={e => setName(e.target.value)} type="text"/>
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input required value={email} onChange={e => setEmail(e.target.value)} type="email"/>
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input required value={password} onChange={e => setPassword(e.target.value)} type="password"/>
                    </div>

                    <div>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type="password"/>
                    </div>


                <input type="submit" value="Submit" className={"btn"}/>
            </form>
            <p>Already have an account? <Link href={"/account/login"}>Log In</Link></p>
        </div>
    );
};

export default Register;