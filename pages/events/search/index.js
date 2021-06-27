import axios from "axios";
import {API_URL} from "../../../config";
import Search from "../../../components/Search/Search";
import qs from "qs";
import Head from "next/head";
import Link from "next/link";
import EventItem from "../../../components/Event-Item/EventItem";
import {useRouter} from "next/router";

const SearchPage = ({events}) => {
    const {query: {term}} = useRouter();

    return (
        <>
            <Head>
                <title>Search Results</title>
            </Head>

            <h1>Search Results for {term}</h1>
            <Link href={"/events"}>Go Back</Link>
            {events.length === 0 && <h3>No events to show</h3>}
            {events.map(event => <EventItem key={event.id} event={event}/>)}
        </>

    );
};

export const getServerSideProps = async ({query: {term}}) => {
    const query = qs.stringify({
        _where: {
            _or: [
                {name_contains: term},
                {performers_contains: term},
                {description_contains: term},
                {venue_contains: term},
            ]
        }
    })
    const {data: events} = await axios.get(`${API_URL}/events?${query}`);

    return {
        props: {events}
    }
}

export default SearchPage;