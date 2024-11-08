import React, {useState} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import ReactivateUserConfirmation from "./ReactivateUserConfirmation";

interface ReactivateUsersModalProps {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReactivateUsersModal: React.FC<ReactivateUsersModalProps> = ({ show, setShow }) => {
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
                        className={`modal reactivate-user ${animateClose ? "slide-up" : ""}`}
                        fade={true}
                >
                    <ModalHeader toggle={handleClose}>
                        <span className="heading__semibold">Nutzer reaktiviert</span>
                    </ModalHeader>
                    <ModalBody>
                        {confirmation ?
                                <ReactivateUserConfirmation /> :
                                <div className="reactivate-user__text body-big__regular">Möchten Sie den Benutzer <span
                                        className="body-big__medium">“Thomas Müller”</span> wirklich wieder reaktivieren?
                                </div>
                        }

                    </ModalBody>
                    <ModalFooter>

                        {confirmation ?
                                <>
                                    <button className="button button-secondary button--big button--grey"
                                            onClick={handleClose}>
                                        <span className="button__text">Schließen</span>
                                    </button>
                                </>
                                :
                                <>
                                    <button className="button button-secondary button--big button--grey"
                                            onClick={handleClose}>
                                        <span className="button__text">Abbrechen</span>
                                    </button>
                                    <button className="button button--big button--green" onClick={handleConfirmation}>
                                        <i className="button__icon icon-user-switch"></i>
                                        <span className="button__text">Nutzer aktivieren</span>
                                    </button>
                                </>
                        }

                    </ModalFooter>
                </Modal>
            </>
    )
};

export default ReactivateUsersModal;