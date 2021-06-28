import classes from "./event.module.css";
import Link from "next/link";
import Image from "next/image";
import {FaPencilAlt, FaTimes} from "react-icons/fa";
import axios from "axios";
import {API_URL} from "../../config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from "next/router";

const Event = ({event}) => {
    const router = useRouter();

    const humanReadableDate = new Date(event.date).toLocaleString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })

    const deleteEventHandler = async () => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        try {
            if (confirm("Are you sure?")) {
                await axios.delete(`${API_URL}/events/${event.id}`, config);
                await router.push(`/events`);
            }

        } catch (err) {
            toast.error(err.message);
        }
    }

    return (
        <div className={classes.event}>
            <div className={classes.controls}>
                <Link href={`/events/edit/${event.id}`}>
                    <a><FaPencilAlt /> Edit Event</a>
                </Link>
                <a className={classes.delete} onClick={deleteEventHandler}><FaTimes/> Delete Event</a>
            </div>

            <ToastContainer/>

            <span>{humanReadableDate} at {event.time}</span>
            <h1>{event.name}</h1>
            {event.image && <div className={classes.image}>
                <Image alt={""} src={event.image.formats.large.url} width={960} height={600} />
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