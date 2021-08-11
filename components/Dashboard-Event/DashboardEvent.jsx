import Link from "next/link";
import {FaPencilAlt, FaTimes} from "react-icons/fa";
import classes from "./DashboardEvent.module.css";

const DashboardEvent = ({event, handleDelete}) => {
    return (
        <div className={classes.event}>
            <h4>
                <Link href={`/events/${event.slug}`}>
                    <a>{event.name}</a>
                </Link>
            </h4>
            <Link href={`/events/edit/${event.id}`}>
                <a className={classes.edit}>
                    <FaPencilAlt /> <span>Edit Event</span>
                </a>
            </Link>
            <a href="#" className={classes.delete} onClick={() => handleDelete(event.id)}>
                <FaTimes /> <span>Delete</span>
            </a>
        </div>
    );
};

export default DashboardEvent;
