import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Hero from "../Hero/Hero";
import {useRouter} from "next/router";
import classes from "./layout.module.css";

const Layout = ({children}) => {
    const {pathname} = useRouter();

    return (
        <>
            <Header/>
            {pathname === "/" && <Hero/>}
            <main className={classes.container}>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;