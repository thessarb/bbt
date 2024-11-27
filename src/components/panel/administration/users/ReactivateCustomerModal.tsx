import React, {useState} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import ReactivateUserConfirmation from "./ReactivateUserConfirmation";
import API_PATHS from "../../../../api/apiPaths";
import {makeApiCall} from "../../../../api/apiRequests";
import API_HEADERS from "../../../../api/apiConfig";

interface ReactivateUsersModalProps {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    customerId: number;
    name: string;
    lastName: string;
    setRefreshList: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReactivateCustomerModal: React.FC<ReactivateUsersModalProps> = ({ show, setShow, customerId, name,lastName, setRefreshList }) => {
    // Modal
    const [animateClose, setAnimateClose] = useState(false);
    const [confirmation, setConfirmation] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const handleClose = () => {
        setAnimateClose(true);
        setTimeout(() => {
            setShow(false);
            setAnimateClose(false);
        }, 350);
    };

    const handleGoBack = () => {
        setConfirmation(false);
        setErrorMessage(false);
    };

    // Reactivate user
    const [validations, setValidations] = useState<Record<string, string>>({});

    const activateCustomer = async (customerId: number): Promise<void> => {

        const updateCustomerData = {
            customer_id: customerId,
        };

        try {
            const response: any = await makeApiCall<ResponseType>(
                    API_PATHS.activateCustomer,
                    "POST",
                    API_HEADERS.authenticated,
                    updateCustomerData
            );
            setConfirmation(true);
        } catch (error: any) {
            setValidations(error.response.data);
            setConfirmation(false);
            setErrorMessage(true);
        }
        setRefreshList((prev) => !prev);
    }

    return (
            <>
                <Modal
                        isOpen={show}
                        toggle={handleClose}
                        className={`modal reactivate-user ${animateClose ? "slide-up" : ""}`}
                        fade={true}
                >
                    <ModalHeader toggle={handleClose}>
                        <span className="heading__semibold">Kunde aktivieren</span>
                    </ModalHeader>
                    <ModalBody>
                        {confirmation ?
                                <ReactivateUserConfirmation name={name} lastName={lastName}/> :
                                errorMessage ?
                                        <div className="confirmation--secondary__error-box">
                                            <div className="confirmation--secondary confirmation--secondary__error body-normal__semibold">
                                                <i className="confirmation--secondary__icon icon-x"></i>
                                                {validations.message}
                                            </div>

                                            <div onClick={() => handleGoBack()}
                                                 className="confirmation--secondary__button button button-gost button--green">
                                                <i className="button__icon icon-arrow-left"></i>
                                                <span className="button__text">Zurück</span>
                                            </div>
                                        </div>
                                        :
                                        <div className="reactivate-user__text body-big__regular">
                                            Möchten Sie den Benutzer
                                            <span className="body-big__medium">{` “${name} ${lastName}” `}</span>
                                            wirklich wieder reaktivieren?
                                        </div>
                        }

                    </ModalBody>
                    <ModalFooter>
                        {confirmation ?
                                    <button className="button button-secondary button--big button--grey"
                                            onClick={handleClose}>
                                        <span className="button__text">Schließen</span>
                                    </button>
                                :
                                errorMessage ?
                                        <button className="button button-secondary button--big button--grey"
                                                onClick={handleClose}>
                                            <span className="button__text">Schließen</span>
                                        </button>
                                        :
                                        <>
                                            <button className="button button-secondary button--big button--grey"
                                                    onClick={handleClose}>
                                                <span className="button__text">Abbrechen</span>
                                            </button>
                                            <button className="button button--big button--green"
                                                    onClick={() => activateCustomer(customerId)}
                                            >
                                                <i className="button__icon icon-user-switch"></i>
                                                <span className="button__text">Nutzer aktivieren</span>
                                            </button>
                                        </>
                        }

                    </ModalFooter>
                </Modal>
            </>
    )
};

export default ReactivateCustomerModal;