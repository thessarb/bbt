import React, {useState} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import ListNoResult from "src/components/panel/dashboard/deadlines/ListNoResult";
import Confirmation from "src/components/Confirmation";
import PlaneUploadForm from "../panel/documents/PlaneUploadForm";
import PlanConfirmation from "../PlanConfirmation";
import PlanConfirmationError from "../PlanConfirmationError";

interface PlaneHochladenModalProps {
    showPlaneHochladenModal: boolean;
    setShowPlaneHochladenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function PlaneUploadModal({showPlaneHochladenModal, setShowPlaneHochladenModal}: PlaneHochladenModalProps) {
    // Modal
    const [animateClose, setAnimateClose] = useState(false);
    const [loading, setLoading] = useState(false);
    const [confirmation2, setConfirmation2] = useState(false);

    const handleClose = () => {
        setAnimateClose(true);
        setTimeout(() => {
            setShowPlaneHochladenModal(false);
            setAnimateClose(false);
            setConfirmation2(false);
        }, 350);
    };

    const handleFileUpload = () => {
        setLoading(true);
        setTimeout(() => {
            setConfirmation2(true);
            setLoading(false);
        }, 1000);
    };

    const handleConfirm = () => {
        setConfirmation2(false); // This function sets loading to false
    };

    // Radio button upload
    const [childUpload, setChildUpload] = useState('upload');
    const handleUploadChange = (selectedUpload: string) => {
        setChildUpload(selectedUpload);
    };

    return (
            <>
                <Modal
                        isOpen={showPlaneHochladenModal}
                        toggle={handleClose}
                        className={`modal release-form ${animateClose ? "slide-up" : ""}`}
                        fade={true}
                        backdrop="static"
                >
                    <ModalHeader toggle={handleClose}>
                        <span className="heading__semibold">Plan hochladen</span>
                    </ModalHeader>
                    <ModalBody>
                        {loading ? (
                                <Confirmation/>
                        ) : (
                                confirmation2 ? (
                                        PlanConfirmation ? <PlanConfirmation /> : <PlanConfirmationError onGoBack={handleConfirm}/>
                                ) : (
                                        PlaneUploadForm ? < PlaneUploadForm onUploadChange={handleUploadChange}/> : <ListNoResult/>
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
                                                {childUpload === "upload" ?
                                                <span className="button__text">Plan hochladen</span>
                                                : <span className="button__text">Planserver Link versenden</span> }
                                            </button>
                                        </>
                                )
                        )}
                    </ModalFooter>
                </Modal>
            </>
    );
}

export default PlaneUploadModal;
