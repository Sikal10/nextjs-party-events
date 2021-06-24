import classes from "./event.module.css";
import Link from "next/link";
import Image from "next/image";
import {FaPencilAlt, FaTimes} from "react-icons/fa";

const Event = ({event}) => {
    const deleteEventHandler = () => {
        console.log("Deleted")
    }

    return (
        <div className={classes.event}>
            <div className={classes.controls}>
                <Link href={`/events/edit/${event.id}`}>
                    <a><FaPencilAlt /> Edit Event</a>
                </Link>
                <a className={classes.delete} onClick={deleteEventHandler}><FaTimes />Delete Event</a>
            </div>
        </div>
    );
};

export default Event;