import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                show={show}
                onHide={handleClose}
                animation={true}
                className={`modal read-message ${animateClose ? 'slide-up' : ''}`}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <span className="heading__semibold">Verzögerung</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="read-message__description body-big__regular">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eos illo iure nemo perferendis quisquam sunt.
                        Dolorum eum facilis harum labore nostrum placeat quis. Deleniti eaque est quae quaerat sit?
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

export default ReadMessageModal;
