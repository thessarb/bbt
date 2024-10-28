import React, { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import PlanFreigebenForm from "./PlanFreigebenForm";
import ListNoResult from "./ListNoResult";

interface ThomasPlaneModalProps {
    showThomasModal: boolean;
    setShowThomasModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function FreigebenFormModal({ showThomasModal, setShowThomasModal }: ThomasPlaneModalProps) {
    // Modal
    const [animateClose, setAnimateClose] = useState(false);
    const handleClose = () => {
        setAnimateClose(true);
        setTimeout(() => {
            setShowThomasModal(false);
            setAnimateClose(false);
        }, 350);
    };

    const handleFileUpload = () => {
        alert("Upload file");
    };

    return (
        <>
            <Modal
                isOpen={showThomasModal}
                toggle={handleClose}
                className={`release-form fade-in ${animateClose ? "slide-up" : ""}`}
                fade={true}
                backdrop="static"
            >
                <ModalHeader toggle={handleClose}>
                    <span className="heading__semibold">Auftrag 80700: Pläne ansehen</span>
                </ModalHeader>
                <ModalBody>
                    {PlanFreigebenForm ? < PlanFreigebenForm/> : <ListNoResult />}
                </ModalBody>
                <ModalFooter>
                    <button className="button button-secondary button--big button--light-grey" onClick={handleClose}>
                        <span className="button__text">Schließen</span>
                    </button>
                    <button className="button button--big button--green" onClick={handleFileUpload}>
                        <i className="button__icon icon-list-checks"></i>
                        <span className="button__text">Plan freigeben</span>
                    </button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default FreigebenFormModal;
