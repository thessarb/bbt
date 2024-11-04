import React, {useState} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import CreateUserForm from "./CreateUserForm";
import LoadingComponent from "../../../LoadingComponent";
import ListNoResult from "../../dashboard/deadlines/ListNoResult";
import UserConfirmation from "../../../UserConfirmation";

interface CreateUserModalProps {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateUserModal: React.FC<CreateUserModalProps> = ({ show, setShow }) => {
    // Modal
    const [animateClose, setAnimateClose] = useState(false);
    const [confirmation, setConfirmation] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleClose = () => {
        setAnimateClose(true);
        setTimeout(() => {
            setShow(false);
            setAnimateClose(false);
        }, 350);
    };

    const handleConfirmation = () => {
        setLoading(true);
        setTimeout(() => {
            setConfirmation(true);
            setLoading(false);
        }, 2000);
    };

    return (
            <>
                <Modal
                        isOpen={show}
                        toggle={handleClose}
                        className={`modal create-user ${animateClose ? "slide-up" : ""}`}
                        fade={true}
                >
                    <ModalHeader toggle={handleClose}>
                        {confirmation ? (
                                <span className="heading__semibold">Nutzer angelegt</span>
                        ) : (
                                <span className="heading__semibold">Nutzer bearbeiten</span>
                        )}
                    </ModalHeader>
                    <ModalBody>

                        {loading ? (
                                <LoadingComponent/>
                        ) : (
                                confirmation ? (
                                        <UserConfirmation />
                                ) : (
                                        CreateUserForm ? <CreateUserForm /> : <ListNoResult/>
                                )
                        )}

                    </ModalBody>
                    <ModalFooter>

                        {loading ? (
                                " "
                        ) : (
                                confirmation ? (
                                        <button className="button button-secondary button--big button--light-grey"
                                                onClick={handleClose}>
                                            <span className="button__text">Schließen</span>
                                        </button>
                                ) : (
                                        <>
                                            <button className="button button-secondary button--big button--light-grey"
                                                    onClick={handleClose}>
                                                <span className="button__text">Abbrechen</span>
                                            </button>
                                            <button className="button button--big button--green"
                                                    onClick={handleConfirmation}>
                                                <i className="button__icon icon-user-plus"></i>
                                                <span className="button__text">Nutzer aktualisieren</span>
                                            </button>
                                        </>
                                )
                        )}

                    </ModalFooter>
                </Modal>
            </>
    )
};

export default CreateUserModal;