import { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

interface ReadMessageModalProps {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReadMessageModal = ({ show, setShow }: ReadMessageModalProps) => {
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
                className={`read-message ${animateClose ? "slide-up" : ""}`}
                fade={true}
            >
                <ModalHeader toggle={handleClose}>
                    <span className="heading__semibold">Verzögerung</span>
                </ModalHeader>
                <ModalBody>
                    <div className="read-message__description body-big__regular">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eos illo iure nemo
                        perferendis quisquam sunt. Dolorum eum facilis harum labore nostrum placeat quis. Deleniti eaque
                        est quae quaerat sit?
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
};

export default ReadMessageModal;
