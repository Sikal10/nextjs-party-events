import classes from "./modal.module.css";
import ReactDOM from "react-dom";
import {FaTimes} from "react-icons/fa";
import {useEffect, useState} from "react";

const Modal = ({showModal, onCloseModal, children, title}) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleCloseModal = e => {
        e.preventDefault();
        onCloseModal();
    }

    const modalContent = showModal ? <div className={classes.overlay} onClick={handleCloseModal}>
        <div className={classes.modal} onClick={e => e.stopPropagation()}>
            <div className={classes.header}>
                <a onClick={handleCloseModal}><FaTimes/></a>
            </div>

            {title && <div>{title}</div>}
            <div className={classes.body}>
                {children}
            </div>
        </div>
    </div> : null;

    if (isBrowser) {
        return ReactDOM.createPortal(modalContent, document.getElementById("modal-root"))
    } else {
        return null
    }

};

export default Modal;