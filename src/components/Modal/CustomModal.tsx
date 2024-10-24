import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                show={show}
                onHide={handleClose}
                animation={true}
                backdrop="static"
                className={`modal  ${animateClose ? 'slide-up' : ''}`}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <span className="heading__regular">FileViewer:</span>
                        <span className="heading__semibold">SchalplanSch alplanScha lplanSchalplan 5_TEDZ_SP_B0_00_0000_01_G</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ab asperiores at distinctio dolorum expedita facilis laboriosam libero maiores,
                    maxime minus nisi non nulla placeat quaerat quam quasi, ratione? Ducimus, odio!
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

export default CustomModal;
