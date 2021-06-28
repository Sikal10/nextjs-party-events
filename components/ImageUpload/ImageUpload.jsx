import {useState} from "react";
import {API_URL} from "../../config";
import classes from "./image-upload.module.css";
import axios from "axios";

const ImageUpload = ({imageUploaded, eventId}) => {
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("files", image);
        formData.append("ref", "events");
        formData.append("refId", eventId);
        formData.append("field", "image");

       try {
           await axios.post(`${API_URL}/upload`, formData);
           console.log(formData)
           imageUploaded();
       } catch (err) {
           console.log(err.message);
       }
    }

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    }

    return (
        <div className={classes.form}>
            <h1>Upload Event Image</h1>
            <form onSubmit={handleSubmit}>
                <div className={classes.file}>
                    <input type="file" onChange={handleFileChange}/>
                </div>

                <input type="submit" value={"Upload"} className={"btn"}/>
            </form>
        </div>
    );
};

export default ImageUpload;