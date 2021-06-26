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
                <a className={classes.delete} onClick={deleteEventHandler}><FaTimes/> Delete Event</a>
            </div>

            <span>{event.date} at {event.time}</span>
            <h1>{event.name}</h1>
            {event.image && <div className={classes.image}>
                <Image src={event.image.formats.medium.url} width={960} height={600} />
            </div>}

            <h3>Performers:</h3>
            <p>{event.performers}</p>
            <h3>Description:</h3>
            <p>{event.description}</p>
            <h3>Venue: {event.venue}</h3>
            <p>{event.address}</p>

            <Link href={"/events"}><a className={classes.back}>{"<"} Go Back</a></Link>
        </div>
    );
};

export default Event;