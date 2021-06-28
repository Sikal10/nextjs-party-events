import EditEvent from "../../../components/Edit-Event/EditEvent";
import axios from "axios";
import {API_URL} from "../../../config";

const EditEventPage = ({event}) => {
    return (
        <>
            <EditEvent event={event}/>
        </>
    );
};

export const getServerSideProps = async ({params: {id}}) => {
    const {data: event} = await axios.get(`${API_URL}/events/${id}`);

    return {
        props: {
            event
        }
    }
}

export default EditEventPage;