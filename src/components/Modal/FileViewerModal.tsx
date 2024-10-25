import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

interface FileViewerModalProps {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

function FileViewerModal({ show, setShow }: FileViewerModalProps) {
    const [animateClose, setAnimateClose] = useState(false);

    const handleClose = () => {
        setAnimateClose(true);
        setTimeout(() => {
            setShow(false);
            setAnimateClose(false);
        }, 350);
    };

    return (
            <>
                <Modal
                        show={show}
                        onHide={handleClose}
                        animation={true}
                        className={`modal file-viewer ${animateClose ? 'slide-up' : ''}`}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <span className="heading__regular">FileViewer:</span>
                            <span className="heading__semibold">SchalplanSch alplanScha lplanSchalplan 5_TEDZ_SP_B0_00_0000_01_G</span>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="file-viewer__file">
                            File view modal
                        </div>
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

export default FileViewerModal;
