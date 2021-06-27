import axios from "axios";
import {API_URL} from "../config";

export const addEvent = async (formData) => {
    const config= {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const {data} = await axios.post(`${API_URL}/events`, config);

    console.log(data)

}