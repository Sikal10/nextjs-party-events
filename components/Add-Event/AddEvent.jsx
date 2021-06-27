import {useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import classes from "./add-event.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {addEvent} from "../../helpers/addEvent";

const AddEvent = () => {
    const [values, setValues] = useState({
        name: "",
        performers: "",
        venue: "",
        address: "",
        description: "",
        time: "",
        date: ""
    });

    const handleSubmit = async e => {
        e.preventDefault();

        //validation
        const hasEmptyFields = Object.values(values).some(element => element === "");

        if (hasEmptyFields) {
            toast.error("Please fill all fields")
        }
        await addEvent();
    }

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    }

    const router = useRouter();

    return (
        <>
            <Link href={"/events"}>Go Back</Link>
            <h1>Add events</h1>
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
                            value={values.date}
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
                        type='text'
                        name='description'
                        id='description'
                        value={values.description}
                        onChange={handleInputChange}
                    />
                </div>

                <input type='submit' value='Add Event' className='btn' />
            </form>

        </>
    );
};

export default AddEvent;