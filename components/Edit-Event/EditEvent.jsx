import React, {useState} from 'react';
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import {API_URL} from "../../config";
import Link from "next/link";
import classes from "../Add-Event/add-event.module.css";
import {useRouter} from "next/router";
import moment from "moment";
import Image from "next/image";
import {FaImage} from "react-icons/fa";
import Modal from "../Modal/Modal";
import ImageUpload from "../ImageUpload/ImageUpload";

const EditEvent = ({event}) => {
    const [values, setValues] = useState({
        name: event.name,
        performers: event.performers,
        venue: event.venue,
        address: event.address,
        description: event.description,
        time: event.time,
        date: event.date
    });
    const [imagePreview, setImagePreview] = useState(event.image ? event.image.formats.thumbnail.url : null);
    const [showModal, setShowModal] = useState(false);

    const router = useRouter();

    const handleSubmit = async e => {
        e.preventDefault();

        //validation
        const hasEmptyFields = Object.values(values).some(element => element === "");

        if (hasEmptyFields) {
            toast.error("Please fill all fields")
        }
        const config= {
            headers: {
                "Content-Type": "application/json"
            }
        }

        try {
            const {data} = await axios.put(`${API_URL}/events/${event.id}`, values, config);
            await router.push(`/events/${data.slug}`);

        } catch (err) {
            toast.error(err.message);
        }
    }

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    }

    const imageUploaded = async () => {
        console.log("uploaded");
        try {
            const {data} = await axios.get(`${API_URL}/events/${event.id}`);
            setImagePreview(data.image.formats.thumbnail.url);
            setShowModal(false)

        } catch (err) {
            console.log("na here error de o")
            console.log(err)
        }
    }

    return (
        <>
            <Link href={"/events"}>Go Back</Link>
            <h1>Edit events</h1>
            <ToastContainer position={"top-center"} />

            <form onSubmit={handleSubmit} className={classes.form}>
                <div className={classes.grid}>
                    <div>
                        <label htmlFor='name'>Event Name</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={values.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='performers'>Performers</label>
                        <input
                            type='text'
                            name='performers'
                            id='performers'
                            value={values.performers}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='venue'>Venue</label>
                        <input
                            type='text'
                            name='venue'
                            id='venue'
                            value={values.venue}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='address'>Address</label>
                        <input
                            type='text'
                            name='address'
                            id='address'
                            value={values.address}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='date'>Date</label>
                        <input
                            type='date'
                            name='date'
                            id='date'
                            value={moment(values.date).format("yyyy-MM-DD")}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='time'>Time</label>
                        <input
                            type='text'
                            name='time'
                            id='time'
                            value={values.time}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor='description'>Event Description</label>
                    <textarea
                        name='description'
                        id='description'
                        value={values.description}
                        onChange={handleInputChange}
                    />
                </div>

                <input type='submit' value='Update Event' className='btn' />
            </form>

            <h2>Event Image</h2>
            {imagePreview ? <Image src={imagePreview} alt={""} height={100} width={170} />: <div><p>No image uploaded</p></div>}

            <div>
                <button onClick={() => setShowModal(true)} className="btn-secondary">
                   <FaImage /> Set Image
                </button>
            </div>

            <Modal showModal={showModal} onCloseModal={() => setShowModal(false)}>
                <ImageUpload eventId={event.id} imageUploaded={imageUploaded} />
            </Modal>
        </>

    );
};

export default EditEvent;