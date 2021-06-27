import {API_URL} from "../../config";
import axios from "axios";
import Event from "../../components/Event/Event";

const EventPage = ({event}) => {
    return <Event event={event} />
};

export const getServerSideProps = async ({query: {slug}}) => {
    const {data: events} = await axios.get(`${API_URL}/events?slug=${slug}`);

    return {
        props: {
            event: events[0]
        }
    }
}

export default EventPage;