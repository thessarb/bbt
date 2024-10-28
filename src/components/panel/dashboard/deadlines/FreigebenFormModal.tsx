import React, {useState} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import PlanFreigebenForm from "./PlanFreigebenForm";
import ListNoResult from "./ListNoResult";
import Confirmation from "../../../confirmation";

interface ThomasPlaneModalProps {
    showThomasModal: boolean;
    setShowThomasModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function FreigebenFormModal({showThomasModal, setShowThomasModal}: ThomasPlaneModalProps) {
    // Modal
    const [animateClose, setAnimateClose] = useState(false);
    const [loading, setLoading] = useState(false);
    const [confirmation2, setConfirmation2] = useState(false);

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
            setConfirmation2(true);
            setLoading(false);
        }, 1000);
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
                        {confirmation2 ? (
                                <span className="heading__semibold">Freigabe erteilt</span>
                        ) : (
                                <span className="heading__semibold">Auftrag 80700: Pläne ansehen</span>
                        )}
                    </ModalHeader>
                    <ModalBody>
                        {loading ? (
                                <Confirmation/>
                        ) : (
                                confirmation2 ? (
                                        <div className="second-confirmation">
                                        <span className="second-confirmation__text body-big__regular">
                                            Vielen Dank für Ihre Freigabe. Wir haben folgende Personen über Ihre Freigabe informiert.
                                        </span>

                                            <span className="second-confirmation__admin body-big__medium">
                                            Reuter, Ulf<span
                                                    className="second-confirmation__admin--email body-big__regular">ulf.reuther@thomas-gruppe.de</span>
                                        </span>
                                            <span className="second-confirmation__admin body-big__medium">
                                            Staiger, Jörg<span
                                                    className="second-confirmation__admin--email body-big__regular">joerg.staiger@thomas-gruppe.de</span>
                                        </span>
                                        </div>
                                ) : (
                                        PlanFreigebenForm ? < PlanFreigebenForm/> : <ListNoResult/>
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

export default FreigebenFormModal;
