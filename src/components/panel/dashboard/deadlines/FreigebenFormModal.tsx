import React, { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

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

    return (
        <>
            <Modal
                isOpen={showThomasModal}
                toggle={handleClose}
                className={`plan-view fade-in ${animateClose ? "fade-out" : ""}`}
                fade={true}
                backdrop="static"
            >
                <ModalHeader toggle={handleClose}>
                    <span className="heading__semibold">Auftrag 80700: Pläne ansehen</span>
                </ModalHeader>
                <ModalBody>thomas plane freigeben form modal</ModalBody>
                <ModalFooter>
                    <button className="button button-secondary button--big button--grey" onClick={handleClose}>
                        <span className="button__text">Schließen</span>
                    </button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default FreigebenFormModal;
