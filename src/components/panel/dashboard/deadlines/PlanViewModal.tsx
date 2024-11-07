import React, { useState, useEffect } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import ThomasPlaneTable from "./ThomasPlaneTable";
import MainePlane from "./MainePlane";
import ListNoResult from "./ListNoResult";
import PlaneHochladenModal from "../../../Modal/PlaneHochladenModal";

interface PlanViewModalProps {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

function PlanViewModal({ show, setShow }: PlanViewModalProps) {
    // Modal
    const [animateClose, setAnimateClose] = useState(false);
    const handleClose = () => {
        setAnimateClose(true);
        setTimeout(() => {
            setShow(false);
            setAnimateClose(false);
        }, 350);
    };

    // Modal Plane Hochladen
    const [showPlaneHochladenModal, setShowPlaneHochladenModal] = useState(false);
    const handlePlaneHochladenModalShow = () => {
        setShowPlaneHochladenModal(true);
    };

    // Tab
    const [activeTab, setActiveTab] = useState(0);
    const [visibleTab, setVisibleTab] = useState(activeTab);
    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    // Animate the content change
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisibleTab(activeTab);
        }, 350);

        return () => clearTimeout(timer); // cleanup function
    }, [activeTab]);

    return (
        <>
            <Modal
                isOpen={show}
                toggle={handleClose}
                className={`modal plan-view ${animateClose ? "slide-up" : ""}`}
                fade={true}
            >
                <ModalHeader toggle={handleClose}>
                    <span className="heading__semibold">Auftrag 80700: Pläne ansehen</span>
                </ModalHeader>
                <ModalBody>
                    <div className="tab">
                        <div className="tab__header">
                            <div className="tab__buttons">
                                <button
                                    className={`tab__item subheading__regular ${activeTab === 0 ? "active" : ""}`}
                                    onClick={() => handleTabClick(0)}
                                >
                                    <span className="button__text">thomas Pläne</span>
                                </button>
                                <button
                                    className={`tab__item subheading__regular ${activeTab === 1 ? "active" : ""}`}
                                    onClick={() => handleTabClick(1)}
                                >
                                    <span className="button__text">Meine Pläne</span>
                                </button>
                            </div>
                            {activeTab === 1 && (
                                    <>
                                        <button onClick={handlePlaneHochladenModalShow} className="tab__upload button button--big button--green">
                                            <i className="button__icon icon-file-arrow-up"></i>
                                            <span className="button__text">Neuen Plan hochladen</span>
                                        </button>
                                        {PlaneHochladenModal && <PlaneHochladenModal
                                            showPlaneHochladenModal={showPlaneHochladenModal}
                                            setShowPlaneHochladenModal={setShowPlaneHochladenModal}/>}
                                    </>
                            )}
                        </div>

                        <div className="tab__content">
                            {visibleTab === 0 && (
                                    <div
                                            id="thomas-plane"
                                            className={`tab__content-item ${activeTab === 0 ? "active" : "close"}`}
                                    >
                                        {ThomasPlaneTable ? <ThomasPlaneTable/> : <ListNoResult/>}
                                    </div>
                            )}

                            {visibleTab === 1 && (
                                <div
                                    id="my-plane"
                                    className={`tab__content-item ${activeTab === 1 ? "active" : "close"}`}
                                >
                                    {MainePlane ? <MainePlane /> : <ListNoResult />}
                                </div>
                            )}
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="button button-secondary button--big button--grey" onClick={handleClose}>
                        <span className="button__text">Schließen</span>
                    </button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default PlanViewModal;
