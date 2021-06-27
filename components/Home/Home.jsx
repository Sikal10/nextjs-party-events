import EventItem from "../Event-Item/EventItem";
import Link from "next/link";

const Home = ({events}) => {
    return (
        <>
            <h1>Upcoming Events</h1>
            {events.length === 0 && <h3>No events to show</h3>}
            {events.map(event => <EventItem key={event.id} event={event}/>)}
            {events.length > 0 && <Link href={"/events"}>
                <a className={"btn-secondary"}>View All Events</a>
            </Link>}
        </>
    );
};

export default Home;