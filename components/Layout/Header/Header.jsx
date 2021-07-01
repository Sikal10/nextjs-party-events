import Link from "next/link";
import classes from "./header.module.css";
import Search from "../../Search/Search";
import {FaSignInAlt, FaSignOutAlt} from "react-icons/fa";
import {useSelector, useDispatch} from "react-redux";
import {selectUser} from "../../../lib/slices/userSlice";
import {logout} from "../../../lib/slices/app-auth/authAPI";

const Header = () => {
    const dispatch  = useDispatch();
    const {user} = useSelector(selectUser);

    console.log(user);

    const handleLogout = () => {
        console.log("logged out");
        dispatch(logout());
    }

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href={"/"}>
                    <a>Party Events</a>
                </Link>
            </div>

            <Search/>

            <ul>
                <li><Link href={"/events"}>Events</Link></li>
                {user ?
                    <>
                        <li>
                            <Link href={"/events/add"}>Add Event</Link>
                        </li>
                        <li>
                            <button onClick={handleLogout} className="btn-secondary btn-icon"><FaSignOutAlt />Logout</button>
                        </li>

                    </> :
                    <li><Link href={"/account/login"}>
                        <a className={"btn-secondary btn-icon"}><FaSignInAlt/>Login</a>
                    </Link></li>
                }

            </ul>

        </header>
    );
};

export default Header;