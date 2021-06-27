import {useRouter} from "next/router";
import {useState} from "react";
import classes from "./search.module.css";

const Search = () => {
    const [term, setTerm] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await router.push(`/events/search?term=${term}`);
        setTerm("");

    }

    return (
        <div className={classes.search}>
            <form onSubmit={handleSubmit}>
                <input placeholder={"Search Events"} type="text" value={term} onChange={e => setTerm(e.target.value)}/>
            </form>
        </div>
    );
};

export default Search;