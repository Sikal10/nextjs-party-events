import Link from "next/link";
import classes from "./header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href={"/"}>
                    <a>Party Events</a>
                </Link>
            </div>

            <ul>
                <li><Link href={"/events"}>Events</Link></li>
            </ul>

        </header>
    );
};

export default Header;