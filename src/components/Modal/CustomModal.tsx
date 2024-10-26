import { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

interface CustomModalProps {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

function CustomModal({ show, setShow }: CustomModalProps) {
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
                className={`modal ${animateClose ? "slide-up" : ""}`}
                fade={true}
                backdrop="static"
            >
                <ModalHeader toggle={handleClose}>
                    <span className="heading__regular">FileViewer:</span>
                    <span className="heading__semibold">
                        SchalplanSch alplanScha lplanSchalplan 5_TEDZ_SP_B0_00_0000_01_G
                    </span>
                </ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Ab asperiores at distinctio dolorum expedita facilis laboriosam libero maiores,
                    maxime minus nisi non nulla placeat quaerat quam quasi, ratione? Ducimus, odio!
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

export default CustomModal;
