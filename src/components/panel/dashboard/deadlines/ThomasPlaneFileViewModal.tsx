import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';

interface ThomasPlaneModalProps {
    showThomasModal: boolean;
    setShowThomasModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function ThomasPlaneFileViewModal({showThomasModal, setShowThomasModal}: ThomasPlaneModalProps) {

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
                        show={showThomasModal}
                        onHide={handleClose}
                        animation={true}
                        backdrop="static"
                        className={`modal plan-view ${animateClose ? 'slide-up' : ''}`}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <span className="heading__semibold">Auftrag 80700: Pläne ansehen</span>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        thomas plane Image view
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="button button-secondary button--big button--grey" onClick={handleClose}>
                            <span className="button__text">Schließen</span>
                        </button>
                    </Modal.Footer>
                </Modal>
            </>
    );
}

export default ThomasPlaneFileViewModal;
