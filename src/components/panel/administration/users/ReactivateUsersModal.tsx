import React, {useState} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import ReactivateUserConfirmation from "./ReactivateUserConfirmation";
import API_PATHS from "../../../../api/apiPaths";
import {makeApiCall} from "../../../../api/apiRequests";
import API_HEADERS from "../../../../api/apiConfig";
import LoadingComponent from "../../../LoadingComponent";

interface ReactivateUsersModalProps {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    userId: number;
    name: string;
    lastName: string;
    setRefreshList: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReactivateUsersModal: React.FC<ReactivateUsersModalProps> = ({ show, setShow, userId, name,lastName, setRefreshList }) => {
    // Modal
    const [animateClose, setAnimateClose] = useState(false);
    const [confirmation, setConfirmation] = useState(false);
    const handleClose = () => {
        setAnimateClose(true);
        setTimeout(() => {
            setShow(false);
            setAnimateClose(false);
        }, 350);
    };

    // Reactivate user
    const [validations, setValidations] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState<boolean>(false);

    const reactivateUser = async (userId: number): Promise<void> => {
        const request: any = API_PATHS.restoreUser(userId);
        setLoading(true);
        try {
            const response: any = await makeApiCall<ResponseType>(request, "PUT", API_HEADERS.authenticated);
        } catch (error: any) {
            if (error.response.status === 403) {
                setValidations(error.response.data);
            }
            if (error.response.status === 404) {
                setValidations(error.response.data);
            }
        }
        setRefreshList((prev) => !prev);
        setLoading(false);
        setConfirmation(true);
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
                        <span className="heading__semibold">Nutzer reaktiviert</span>
                    </ModalHeader>
                    <ModalBody>

                        {loading ?
                                <div className="loading-container">
                                    <LoadingComponent/>
                                </div>
                                :
                                confirmation ?
                                            <ReactivateUserConfirmation name={name} lastName={lastName} validations={validations.message}/> :
                                            <div className="reactivate-user__text body-big__regular">
                                                Möchten Sie den Benutzer
                                                <span className="body-big__medium">{` “${name} ${lastName}” `}</span>
                                                wirklich wieder reaktivieren?
                                            </div>

                        }

                    </ModalBody>
                    <ModalFooter>

                        {confirmation ?
                                <>
                                    <button className="button button-secondary button--big button--grey"
                                            onClick={handleClose}>
                                        <span className="button__text">Schließen</span>
                                    </button>
                                </>
                                :
                                <>
                                    <button className="button button-secondary button--big button--grey"
                                            onClick={handleClose}>
                                        <span className="button__text">Abbrechen</span>
                                    </button>
                                    <button className="button button--big button--green"
                                            onClick={() => reactivateUser(userId)}
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

export default ReactivateUsersModal;