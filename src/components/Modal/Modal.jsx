import { useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.scss";

const modalRoot = document.getElementById("modal");

const Modal = ({ open, onClose }) => {
    if (!open) return null;
    return createPortal(
        <div className={classes.modal} onClick={onClose}>
            <div
                className={classes.modalCard}
                onClick={(event) => event.stopPropagation()}
            ></div>
        </div>,
        modalRoot
    );
};

export default Modal;
