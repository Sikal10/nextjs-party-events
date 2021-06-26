import Link from "next/link";
import Image from "next/image";
import classes from "./event-item.module.css";

const EventItem = ({event}) => {
    const humanReadableDate = new Date(event.date).toLocaleString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })

    return (
        <div className={classes.event}>
            <div className={classes.image}>
                <Image alt={""} src={event.image ? event.image.formats.thumbnail.url : `images/event-default.png`} height={100} width={170}/>
            </div>

            <div className={classes.info}>
                <span className={classes.date}>{humanReadableDate} at {event.time}</span>
                <h3>{event.name}</h3>
            </div>

            <div>
                <Link href={`/events/${event.slug}`}>
                    <a className={"btn"}>Details</a>
                </Link>
            </div>

        </div>
    );
};

export default EventItem;