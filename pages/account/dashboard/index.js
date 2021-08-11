import Title from "../../../components/Title/Title";
import {parseCookies} from "../../../helpers";
import Dashboard from "../../../components/Dashboard/Dashboard";
import {API_URL} from "../../../config";

const DashboardPage = ({events}) => {
    return (
        <>
           <Title title={"User Dashboard"} />

            <Dashboard events={events} />
        </>
    );
};

export default DashboardPage;

export const getServerSideProps = async ({req}) => {
    const {token} = parseCookies(req);

    const res = await fetch(`${API_URL}/events/me`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    const events = await res.json()

    return {
        props: {events}
    }
}