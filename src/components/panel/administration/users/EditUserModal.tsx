import React, {useState} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import CreateUserForm from "./CreateUserForm";
import LoadingComponent from "../../../LoadingComponent";
import ListNoResult from "../../dashboard/deadlines/ListNoResult";
import UserConfirmation from "../../../UserConfirmation";
import EditUserForm from "./EditUserForm";

interface EditUserModalProps {
    showEditModal: boolean;
    setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditUserModal: React.FC<EditUserModalProps> = ({ showEditModal, setShowEditModal }) => {
    // Modal
    const [animateClose, setAnimateClose] = useState(false);
    const [confirmation, setConfirmation] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleClose = () => {
        setAnimateClose(true);
        setTimeout(() => {
            setShowEditModal(false);
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
                        isOpen={showEditModal}
                        toggle={handleClose}
                        className={`modal edit-user ${animateClose ? "slide-up" : ""}`}
                        fade={true}
                >
                    <ModalHeader toggle={handleClose}>
                        {loading ? (
                                <span className="heading__semibold">Modal Loading</span>
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
                                        EditUserForm ? <EditUserForm /> : <ListNoResult/>
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

export default EditUserModal;