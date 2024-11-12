import React, {useState} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import ListNoResult from "src/components/panel/dashboard/deadlines/ListNoResult";
import PlaneErsetzenForm from "./PlaneErsetzenForm";
import LoadingComponent from "../../../LoadingComponent";
import PlanConfirmation from "../../../PlanConfirmation";

interface PlaneErsetzenModalProps {
    showPlaneErsetzenModal: boolean;
    setShowPlaneErsetzenModal: React.Dispatch<React.SetStateAction<boolean>>;
    itemIndex: number;
}

const  PlaneErsetzenModal: React.FC<PlaneErsetzenModalProps>  = ({showPlaneErsetzenModal, setShowPlaneErsetzenModal, itemIndex}) => {
    // Modal
    const [animateClose, setAnimateClose] = useState(false);
    const [loading, setLoading] = useState(false);
    const [confirmation2, setConfirmation2] = useState(false);

    const handleClose = () => {
        setAnimateClose(true);
        setTimeout(() => {
            setShowPlaneErsetzenModal(false);
            setAnimateClose(false);
        }, 350);
    };

    const handleFileUpload = () => {
        setLoading(true);
        setTimeout(() => {
            setConfirmation2(true);
            setLoading(false);
        }, 1000);
    };

    return (
            <>
                <Modal
                        isOpen={showPlaneErsetzenModal}
                        toggle={handleClose}
                        className={`modal replace-plan ${animateClose ? "slide-up" : ""}`}
                        fade={true}
                        backdrop="static"
                >
                    <ModalHeader toggle={handleClose}>
                        <span className="heading__semibold">Plan ersetzen</span>
                    </ModalHeader>
                    <ModalBody>
                        {loading ? (
                                <LoadingComponent/>
                        ) : (
                                confirmation2 ? (
                                        <PlanConfirmation />
                                ) : (
                                        PlaneErsetzenForm ? < PlaneErsetzenForm  itemIndex={itemIndex}/> : <ListNoResult/>
                                )
                        )}
                    </ModalBody>
                    <ModalFooter>
                        {loading ? (
                                " "
                        ) : (
                                confirmation2 ? (
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
                                                    onClick={handleFileUpload}>
                                                <i className="button__icon icon-file-arrow-up"></i>
                                                <span className="button__text">Plan hochladen</span>
                                            </button>
                                        </>
                                )
                        )}
                    </ModalFooter>
                </Modal>
            </>
    );
}

export default PlaneErsetzenModal;
