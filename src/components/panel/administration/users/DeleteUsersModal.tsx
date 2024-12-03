import React, {useState} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import DeleteUserConfirmation from "./DeleteUserConfirmation";
import API_PATHS from "../../../../api/apiPaths";
import {makeApiCall} from "../../../../api/apiRequests";
import API_HEADERS from "../../../../api/apiConfig";
import LoadingComponent from "../../../LoadingComponent";

interface DeleteUsersModalProps {
    show: boolean;
    userId: number;
    name: string;
    lastName: string;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    setRefreshList: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteUsersModal: React.FC<DeleteUsersModalProps> = ({show, setShow, userId, name, lastName, setRefreshList}) => {
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

    // Delete user
    const [validations, setValidations] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState<boolean>(false);

    const deleteUser = async (userId: number): Promise<void> => {
        const request: any = API_PATHS.deleteUser(userId);
        setConfirmation(true);
        setLoading(true);

        try {
            const response: any = await makeApiCall<ResponseType>(request, "DELETE", API_HEADERS.authenticated);
        } catch (error: any) {
            if (error.response.status === 403) {
                setValidations(error.response.data);
            }
        }
        setLoading(false);
        setRefreshList((prev) => !prev);
    }

    return (
            <>
                <Modal
                        isOpen={show}
                        toggle={handleClose}
                        className={`modal delete-user ${animateClose ? "slide-up" : ""}`}
                        fade={true}
                >
                    <ModalHeader toggle={handleClose}>
                        <span className="heading__semibold">Nutzer deaktivieren</span>
                    </ModalHeader>
                    <ModalBody>
                        {loading ?
                                <div className="loading-container">
                                    <LoadingComponent/>
                                </div>
                                :
                                confirmation ?
                                        <DeleteUserConfirmation name={name} lastName={lastName}/> :
                                        <div className="delete-user__text body-big__regular">
                                            Möchten Sie den Benutzer
                                            <span className="body-big__medium">{` “${name} ${lastName}” `}</span>
                                            wirklich deaktivieren?
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
                                    <button className="button button--big button--red"
                                            onClick={() => deleteUser(userId)}
                                    >
                                        <i className="button__icon icon-user-minus"></i>
                                        <span className="button__text">Nutzer deaktivieren</span>
                                    </button>
                                </>
                        }
                    </ModalFooter>
                </Modal>
            </>
    )
};

export default DeleteUsersModal;