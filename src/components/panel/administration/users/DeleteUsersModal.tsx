import React, {useState} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import DeleteUserConfirmation from "./DeleteUserConfirmation";

interface DeleteUsersModalProps {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteUsersModal: React.FC<DeleteUsersModalProps> = ({ show, setShow }) => {
    // Modal
    const [animateClose, setAnimateClose] = useState(false);
    const [confirmation, setConfirmation] = useState(false);
    const handleClose = () => {
        setAnimateClose(true);
        setTimeout(() => {
            setShow(false);
            setAnimateClose(false);
        }, 350);
    };

    const handleConfirmation = () => {
        setTimeout(() => {
            setConfirmation(true);
        }, 350);
    };

    return (
            <>
                <Modal
                        isOpen={show}
                        toggle={handleClose}
                        className={`modal delete-user ${animateClose ? "slide-up" : ""}`}
                        fade={true}
                >
                    <ModalHeader toggle={handleClose}>
                        <span className="heading__semibold">Nutzer deaktivieren</span>
                    </ModalHeader>
                    <ModalBody>
                        {confirmation ?
                                <DeleteUserConfirmation /> :
                                <div className="delete-user__text body-big__regular">Möchten Sie den Benutzer <span
                                        className="body-big__medium">“Thomas Müller”</span> wirklich deaktivieren?
                                </div>
                        }

                    </ModalBody>
                    <ModalFooter>
                        <button className="button button-secondary button--big button--grey" onClick={handleClose}>
                            <span className="button__text">Schließen</span>
                        </button>
                        {!confirmation &&
                                <button className="button button--big button--red" onClick={handleConfirmation}>
                                    <i className="button__icon icon-user-minus"></i>
                                    <span className="button__text">Nutzer deaktivieren</span>
                                </button>
                        }

                    </ModalFooter>
                </Modal>
            </>
    )
};

export default DeleteUsersModal;