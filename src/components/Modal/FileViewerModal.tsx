import { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

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
                isOpen={show}
                toggle={handleClose}
                className={`modal file-viewer ${animateClose ? "slide-up" : ""}`}
                fade={true}
            >
                <ModalHeader toggle={handleClose}>
                    <span className="heading__regular">FileViewer:</span>
                    <span className="heading__semibold">
                        SchalplanSch alplanScha lplanSchalplan 5_TEDZ_SP_B0_00_0000_01_G
                    </span>
                </ModalHeader>
                <ModalBody>
                    <div className="file-viewer__file">File view modal</div>
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

export default FileViewerModal;
