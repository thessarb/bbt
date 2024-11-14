import React, {useState} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import PlanReleaseForm from "./PlanReleaseForm";
import ListNoResult from "./ListNoResult";
import LoadingComponent from "src/components/LoadingComponent";
import Confirmation from "src/components/Confirmation";

interface ThomasPlaneModalProps {
    showThomasModal: boolean;
    setShowThomasModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function ReleaseFormModal({showThomasModal, setShowThomasModal}: ThomasPlaneModalProps) {
    // Modal
    const [animateClose, setAnimateClose] = useState(false);
    const [loading, setLoading] = useState(false);
    const [confirmation, setConfirmation] = useState(false);

    const handleClose = () => {
        setAnimateClose(true);
        setTimeout(() => {
            setShowThomasModal(false);
            setAnimateClose(false);
        }, 350);
    };

    const handleFileUpload = () => {
        setLoading(true);
        setTimeout(() => {
            setConfirmation(true);
            setLoading(false);
        }, 1000);
    };

    return (
            <>
                <Modal
                        isOpen={showThomasModal}
                        toggle={handleClose}
                        className={`modal release-form ${animateClose ? "fade-out" : ""}`}
                        fade={true}
                        backdrop="static"
                >
                    <ModalHeader toggle={handleClose}>
                        {confirmation ? (
                                <span className="heading__semibold">Freigabe erteilt</span>
                        ) : (
                                <span className="heading__semibold">Plan freigeben: D02 - Index 1</span>
                        )}
                    </ModalHeader>
                    <ModalBody>
                        {loading ? (
                                <LoadingComponent/>
                        ) : (
                                confirmation ? (
                                        <Confirmation />
                                ) : (
                                        PlanReleaseForm ? < PlanReleaseForm/> : <ListNoResult/>
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
                                                <span className="button__text">Schließen</span>
                                            </button>
                                            <button className="button button--big button--green"
                                                    onClick={handleFileUpload}>
                                                <i className="button__icon icon-list-checks"></i>
                                                <span className="button__text">Plan freigeben</span>
                                            </button>
                                        </>
                                )
                        )}
                    </ModalFooter>
                </Modal>
            </>
    );
}

export default ReleaseFormModal;
