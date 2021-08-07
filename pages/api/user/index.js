import {API_URL} from "../../../config";
import cookie from "cookie";
import axios from "axios";


const handler = async (req, res) => {
    if (req.method !== "GET") {
        return res.status(405).json({message: `Method ${req.method} is not allowed.`});
    }

    if (!req.headers.cookie) return res.status(403).json({message: `Not Authorized.`});

    const {token} = cookie.parse(req.headers.cookie);

    const options = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    const {statusText, data} = await axios.get(`${API_URL}/users/me`, options);
    const user = await data;

    if (statusText === "OK") {
        res.status(200).json({user});
    } else {
        res.status(403).json({message: `User forbidden.`});
    }
}

export default handler;