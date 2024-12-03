import React, {useEffect, useState} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import LoadingComponent from "../../../LoadingComponent";
import UserConfirmation from "../../../UserConfirmation";
import API_PATHS from "../../../../api/apiPaths";
import {makeApiCall} from "../../../../api/apiRequests";
import API_HEADERS from "../../../../api/apiConfig";
import Select, {SingleValue} from "react-select";

interface EditUserModalProps {
    showEditModal: boolean;
    setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
    userId: number;
    setRefreshList: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditUserModal: React.FC<EditUserModalProps> = ({showEditModal, setShowEditModal, userId, setRefreshList}) => {
    // Modal
    const [animateClose, setAnimateClose] = useState(false);
    const [confirmation, setConfirmation] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleClose = () => {
        setAnimateClose(true);
        setTimeout(() => {
            setShowEditModal(false);
            setAnimateClose(false);
        }, 350);
    };

    // Input Fields
    const [surname, setSurname] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [company, setCompany] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [isSurnameFocused, setIsSurnameFocused] = useState<boolean>(false);
    const [isNameFocused, setIsNameFocused] = useState<boolean>(false);
    const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
    const [isCompanyFocused, setIsCompanyFocused] = useState<boolean>(false);
    const [isPhoneFocused, setIsPhoneFocused] = useState<boolean>(false);
    const [isSurnameError, setIsSurnameError] = useState<boolean>(false);
    const [isNameError, setIsNameError] = useState<boolean>(false);
    const [isEmailError, setIsEmailError] = useState<boolean>(false);
    const [isCompanyError, setIsCompanyError] = useState<boolean>(false);
    const [isPhoneError, setIsPhoneError] = useState<boolean>(false);
    const isInputRequired = true;
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    const handleInputChange = (
            setter: React.Dispatch<React.SetStateAction<string>>,
            setError: React.Dispatch<React.SetStateAction<boolean>>
    ) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setter(e.target.value);
        if (isInputRequired && e.target.value.trim() === '') {
            setError(true);
        } else {
            setError(false);
        }
    };
    const handleInputFocus = (
            setFocus: React.Dispatch<React.SetStateAction<boolean>>
    ) => () => {
        setFocus(true);
    };
    const handleInputBlur = (
            value: string,
            setError: React.Dispatch<React.SetStateAction<boolean>>,
            setFocus: React.Dispatch<React.SetStateAction<boolean>>
    ) => () => {
        setFocus(false);
        if (isInputRequired && value.trim() === '') {
            setError(true);
        }
    };

    // Select Role
    const [role, setRole] = useState<{ id: number; value: string; label: string } | null>(null);
    const [isSelectedOption1Focused, setIsSelectedOption1Focused] = useState<boolean>(false);
    const [isSelectedOption1Error, setIsSelectedOption1Error] = useState<boolean>(false);
    const isSelectedOptionRequired = true;

    useEffect(() => {
        if (role?.id === 2) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }, [role]);

    const handleSelectChange1 = (newValue: SingleValue<{ id: number; value: string; label: string }>) => {
        setRole(newValue);
        if (isSelectedOptionRequired && !newValue) {
            setIsSelectedOption1Error(true);
        } else {
            setIsSelectedOption1Error(false);
        }
    };

    const roleOptions = [
        {id: 1, value: 'Administration', label: 'Administration'},
        {id: 2, value: 'Customer', label: 'Customer'},
        {id: 4, value: 'Internal', label: 'Internal'},
        {id: 5, value: 'Architect', label: 'Architect'},
    ];

    // Select Order
    const [selectOrder, setSelectOrder] = useState<{ value: string; label: string } | null>(null);
    const [tableData, setTableData] = useState<{ value: string; label: string; name: string; address: string; responsible: string }[]>([]);
    const [isSelectOrderFocused, setIsSelectOrderFocused] = useState<boolean>(false);
    const [isSelectOrderError, setIsSelectOrderError] = useState<boolean>(false);
    const isSelectOrderRequired = false;
    const [allOptions, setAllOptions] = useState<{ value: string; label: string; name: string; address: string; responsible: string }[]>([]);

    // Filter options to exclude already added orders
    const filteredOptions = allOptions.filter(option => !tableData.some(data => data.value === option.value));
    const handleSelectOrderChange = (newValue: SingleValue<{ value: string; label: string }>) => {
        if (newValue) {
            const selectedOrder = allOptions.find(option => option.value === newValue.value);
            if (selectedOrder) {
                setTableData([...tableData, selectedOrder]);
                setSelectOrder(null); // Clear selection after adding
            }
        }
        if (isSelectOrderRequired && !newValue) {
            setIsSelectOrderError(true);
        } else {
            setIsSelectOrderError(false);
        }
    };
    // Remove order from the table
    const handleRemoveOrder = (value: string) => {
        setTableData(tableData.filter(item => item.value !== value));
    };

    // functionality
    const [user, setUser] = useState<any | null>(null);

    const getUser = async (): Promise<void> => {
        setLoading(true);
        try {
            const response: any = await makeApiCall<ResponseType>(
                    API_PATHS.getUser(userId),
                    "GET",
                    API_HEADERS.authenticated
            );
            setUser(response.response); // Ensure response.response is an object, not an array
            setSurname(response.response.lastname);
            setName(response.response.firstname);
            setEmail(response.response.email);
            setPhone(response.response.phone);
            setRole({
                id: response.response.role_id,
                value: response.response.role.name,
                label: response.response.role.name
            });

            setLoading(false);
            {response.orders &&
                response.orders.map((order: any) => (
                        setTableData([...tableData,
                            {
                                value: order.system_id,
                                label: order.system_id,
                                name: order.system_id,
                                address: order.address,
                                responsible: order.system_id,
                            }
                ])))
            }

        } catch (error: any) {
            setLoading(false);
        }
    };

    const getCompanyOrders = async (): Promise<void> => {
        try {
            const response: any = await makeApiCall<ResponseType>(
                    API_PATHS.companyOrders(userId),
                    "GET",
                    API_HEADERS.authenticated
            );

            if (response?.response) {
                //toDo Add to label, name, responsible the correct path.
                setAllOptions((prevOptions) => [
                    ...prevOptions,
                    ...response.response.map((order: any) => ({
                        value: order.system_id,
                        label: order.system_id,
                        name: order.system_id,
                        address: order.address,
                        responsible: order.system_id,
                    })),
                ]);
            }
        } catch (error: any) {
            setLoading(false);
        }
    };
    useEffect(() => {
        getUser();
        {role?.id == 2 && getCompanyOrders();}
    }, []);

    // form validation
    const [validations, setValidations] = useState<Record<string, string>>({});
    const updateUser = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setLoading(true);
        const updateUserData = {
            firstname: name,
            lastname: surname,
            email: email,
            phone: phone,
            role_id: role?.id,
            order_ids: tableData.map(item => item.value)
        };

        try {
            const response: any = await makeApiCall<ResponseType>(
                    API_PATHS.updateUser(userId),
                    "POST",
                    API_HEADERS.authenticated,
                    updateUserData
            );

            setLoading(false);
            setConfirmation(true);
            setValidations({});

        } catch (error: any) {
            if (error.response.status === 404 || error.response.status === 401 || error.response.status === 422 || error.response.status === 500) {
                setValidations(error.response.data);
                setLoading(false);
            }
        }
        setRefreshList((prev) => !prev);
    };

    return (
            <>
                <Modal
                        isOpen={showEditModal}
                        key={userId}
                        toggle={handleClose}
                        className={`modal edit-user ${animateClose ? "slide-up" : ""}`}
                        fade={true}
                >
                    <ModalHeader toggle={handleClose}>
                        {loading ? (
                                <span className="heading__semibold">Modal Loading</span>
                        ) : (
                                <span className="heading__semibold">Nutzer bearbeiten</span>
                        )}
                    </ModalHeader>
                    <form className="form" method="post" onSubmit={(e) => updateUser(e)}>

                        <ModalBody>
                            {loading ? (
                                    <LoadingComponent/>
                            ) : (
                                    confirmation ? (
                                            <UserConfirmation email={email}/>
                                    ) : (
                                            <div className="edit-user__form">
                                                <div className="edit-user__form--content">
                                                    <div className="divider">
                                                        <span className="divider__title body-small__regular">Persönliche Daten</span>
                                                        <span className="divider__solid"></span>
                                                    </div>

                                                    <div className="edit-user__form--box">
                                                        {/* Surname Field */}
                                                        <div className="edit-user__form--box-item">
                                                            <div className="input-field">
                                                                <label htmlFor="surname" className={`input-field__label caption__regular 
                                                                    ${isSurnameError ? 'input-field__label--error' : isSurnameFocused ? 'input-field__label--focused' : ''}
                                                                `}>
                                                                    Nachname
                                                                    {isInputRequired && !isDisabled &&
                                                                            <span className="input-field__label--required">*</span>}
                                                                </label>

                                                                {isDisabled &&
                                                                        <i className="input-field__disabled icon-lock"></i>}

                                                                <input
                                                                        id="surname"
                                                                        className={`input-field__content body-normal__regular ${isSurnameError ? 'input-field__content--error' : ''}`}
                                                                        type="text"
                                                                        name="surname"
                                                                        disabled={isDisabled}
                                                                        placeholder="Geben Sie Ihren Nachnamen an"
                                                                        value={surname}
                                                                        onChange={handleInputChange(setSurname, setIsSurnameError)}
                                                                        onFocus={handleInputFocus(setIsSurnameFocused)}
                                                                        onBlur={handleInputBlur(surname, setIsSurnameError, setIsSurnameFocused)}
                                                                />
                                                                {validations.lastname ?
                                                                        <div className="input-field--error-message caption__regular">
                                                                            {validations.lastname}
                                                                        </div>
                                                                        : isSurnameError &&
                                                                        <div className="input-field--error-message caption__regular">
                                                                            Last Name is required!
                                                                        </div>
                                                                }
                                                            </div>
                                                        </div>

                                                        {/* Name Field */}
                                                        <div className="edit-user__form--box-item">
                                                            <div className="input-field">
                                                                <label htmlFor="name" className={`input-field__label caption__regular 
                                                                    ${isNameError ? 'input-field__label--error' : isNameFocused ? 'input-field__label--focused' : ''}
                                                                `}>
                                                                    Vorname
                                                                    {isInputRequired && !isDisabled &&
                                                                            <span className="input-field__label--required">*</span>}
                                                                </label>

                                                                {isDisabled &&
                                                                        <i className="input-field__disabled icon-lock"></i>}
                                                                <input
                                                                        id="name"
                                                                        className={`input-field__content body-normal__regular ${isNameError ? 'input-field__content--error' : ''}`}
                                                                        type="text"
                                                                        name="name"
                                                                        disabled={isDisabled}
                                                                        placeholder="Geben Sie Ihren Vornamen an"
                                                                        value={name}
                                                                        onChange={handleInputChange(setName, setIsNameError)}
                                                                        onFocus={handleInputFocus(setIsNameFocused)}
                                                                        onBlur={handleInputBlur(name, setIsNameError, setIsNameFocused)}
                                                                />
                                                                {validations.firstname ?
                                                                        <div className="input-field--error-message caption__regular">
                                                                            {validations.firstname}
                                                                        </div>
                                                                        : isNameError &&
                                                                        <div className="input-field--error-message caption__regular">
                                                                            First Name is required!
                                                                        </div>
                                                                }
                                                            </div>
                                                        </div>

                                                        {/* Email Field */}
                                                        <div className="edit-user__form--box-item">
                                                            <div className="input-field">
                                                                <label htmlFor="email" className={`input-field__label caption__regular 
                                                                    ${isEmailError ? 'input-field__label--error' : isEmailFocused ? 'input-field__label--focused' : ''}
                                                                `}>
                                                                    E-Mail-Adresse
                                                                    {isInputRequired && !isDisabled &&
                                                                            <span className="input-field__label--required">*</span>}
                                                                </label>
                                                                {isDisabled &&
                                                                        <i className="input-field__disabled icon-lock"></i>}
                                                                <input
                                                                        id="email"
                                                                        className={`input-field__content body-normal__regular ${isEmailError ? 'input-field__content--error' : ''}`}
                                                                        type="email"
                                                                        name="email"
                                                                        disabled={isDisabled}
                                                                        placeholder="Tragen Sie Ihre E-Mail-Adresse ein"
                                                                        value={email}
                                                                        onChange={handleInputChange(setEmail, setIsEmailError)}
                                                                        onFocus={handleInputFocus(setIsEmailFocused)}
                                                                        onBlur={handleInputBlur(email, setIsEmailError, setIsEmailFocused)}
                                                                />
                                                                {validations.email ?
                                                                        <div className="input-field--error-message caption__regular">
                                                                            {validations.email}
                                                                        </div>
                                                                        : isEmailError &&
                                                                        <div className="input-field--error-message caption__regular">
                                                                            Email is required!
                                                                        </div>
                                                                }
                                                            </div>
                                                        </div>

                                                        {/* Phone Field */}
                                                        <div className="edit-user__form--box-item">
                                                            <div className="input-field">
                                                                <label htmlFor="phone" className={`input-field__label caption__regular 
                                                                    ${isPhoneError ? 'input-field__label--error' : isPhoneFocused ? 'input-field__label--focused' : ''}
                                                                `}>
                                                                    Telefon
                                                                    {isInputRequired && !isDisabled &&
                                                                            <span className="input-field__label--required">*</span>}
                                                                </label>
                                                                {isDisabled &&
                                                                        <i className="input-field__disabled icon-lock"></i>}
                                                                <input
                                                                        id="phone"
                                                                        className={`input-field__content body-normal__regular ${isPhoneError ? 'input-field__content--error' : ''}`}
                                                                        type="tel"
                                                                        name="phone"
                                                                        disabled={isDisabled}
                                                                        placeholder="Ihre Telefonnummer"
                                                                        value={phone}
                                                                        onChange={handleInputChange(setPhone, setIsPhoneError)}
                                                                        onFocus={handleInputFocus(setIsPhoneFocused)}
                                                                        onBlur={handleInputBlur(phone, setIsPhoneError, setIsPhoneFocused)}
                                                                />
                                                                {validations.phone ?
                                                                        <div className="input-field--error-message caption__regular">
                                                                            {validations.phone}
                                                                        </div>
                                                                        : isPhoneError &&
                                                                        <div className="input-field--error-message caption__regular">
                                                                            Telefon is required!
                                                                        </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="divider">
                                                        <span className="divider__title body-small__regular">Kunden Daten</span>
                                                        <span className="divider__solid"></span>
                                                    </div>

                                                    <div className="edit-user__form--box">
                                                        {/* Funktion */}
                                                        <div className="edit-user__form--box-item edit-user__form--dropdown">
                                                            <div className="select-field">
                                                                <label htmlFor="function" className={`select-field__label caption__regular 
                                                                    ${isSelectedOption1Error ? 'select-field__label--error' : isSelectedOption1Focused ? 'select-field__label--focused' : ''}
                                                                `}>
                                                                    Funktion
                                                                    {isSelectedOptionRequired && !isDisabled &&
                                                                            <span className="select-field__label--required">*</span>}
                                                                </label>
                                                                {isDisabled &&
                                                                        <i className="select-field__disabled icon-lock"></i>}
                                                                <Select
                                                                        id="function"
                                                                        classNamePrefix="react-select"
                                                                        className={`select-field__content body-normal__regular ${role ? "filled" : ""}`}
                                                                        placeholder="Wählen Sie eine Funktion aus"
                                                                        value={role}
                                                                        options={roleOptions}
                                                                        isClearable={true}
                                                                        closeMenuOnSelect={true}
                                                                        name="function"
                                                                        isDisabled={isDisabled}
                                                                        isSearchable={true}
                                                                        onChange={handleSelectChange1}
                                                                        onFocus={() => setIsSelectedOption1Focused(true)}
                                                                        onBlur={() => {
                                                                            setIsSelectedOption1Focused(false);
                                                                            if (isSelectedOptionRequired && !role) {
                                                                                setIsSelectedOption1Error(true);
                                                                            }
                                                                        }}
                                                                />
                                                                {validations.role_id ?
                                                                        <div className="input-field--error-message caption__regular">
                                                                            {validations.role_id}
                                                                        </div>
                                                                        : isSelectedOption1Error &&
                                                                        <div className="input-field--error-message caption__regular">
                                                                            Funktion is required!
                                                                        </div>
                                                                }
                                                            </div>
                                                        </div>

                                                        {/* Company Field */}
                                                        <div className="edit-user__form--box-item">
                                                            <div className="input-field">
                                                                <label htmlFor="company" className={`input-field__label caption__regular 
                                                                    ${isCompanyError ? 'input-field__label--error' : isCompanyFocused ? 'input-field__label--focused' : ''}
                                                                `}>
                                                                    Firma
                                                                    {isInputRequired && !isDisabled &&
                                                                            <span className="input-field__label--required">*</span>}
                                                                </label>
                                                                {isDisabled &&
                                                                        <i className="input-field__disabled icon-lock"></i>}
                                                                <input
                                                                        id="company"
                                                                        className={`input-field__content body-normal__regular ${isCompanyError ? 'input-field__content--error' : ''}`}
                                                                        type="text"
                                                                        name="company"
                                                                        disabled={isDisabled}
                                                                        placeholder="Geben Sie den Firmennamen an"
                                                                        value={company}
                                                                        onChange={handleInputChange(setCompany, setIsCompanyError)}
                                                                        onFocus={handleInputFocus(setIsCompanyFocused)}
                                                                        onBlur={handleInputBlur(company, setIsCompanyError, setIsCompanyFocused)}
                                                                />
                                                                {validations.company ?
                                                                        <div className="input-field--error-message caption__regular">
                                                                            {validations.company}
                                                                        </div>
                                                                        : isCompanyError &&
                                                                        <div className="input-field--error-message caption__regular">
                                                                            Company is required!
                                                                        </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {role?.id == 2 &&
                                                            <>
                                                                <div className="divider">
                                                                    <span className="divider__title body-small__regular">Aufträge</span>
                                                                    <span className="divider__solid"></span>
                                                                </div>

                                                                <div className="edit-user__form--select-box">

                                                                    {/* Select order here */}
                                                                    <div className="edit-user__form--box-item">
                                                                        <div className="select-field">
                                                                            <label htmlFor="order" className={`select-field__label caption__regular 
                                                                                ${isSelectOrderError ? 'select-field__label--error' : isSelectOrderFocused ? 'select-field__label--focused' : ''}
                                                                            `}>
                                                                                Auftrag
                                                                                {isSelectOrderRequired &&
                                                                                        <span className="select-field__label--required">*</span>}
                                                                            </label>

                                                                            <div className="select-field__wrapper">
                                                                                <i className="select-field__wrapper--icon icon-magnifying-glass"/>
                                                                                <Select
                                                                                        id="order"
                                                                                        classNamePrefix="react-select"
                                                                                        className={`select-field__content body-normal__regular ${selectOrder ? "filled" : ""}`}
                                                                                        placeholder="Geben Sie die Auftragsnummer oder -name ein"
                                                                                        value={selectOrder}
                                                                                        options={filteredOptions}
                                                                                        isClearable={true}
                                                                                        closeMenuOnSelect={true}
                                                                                        name="order"
                                                                                        isSearchable={true}
                                                                                        onChange={handleSelectOrderChange}
                                                                                        onFocus={() => setIsSelectOrderFocused(true)}
                                                                                        onBlur={() => {
                                                                                            setIsSelectOrderFocused(false);
                                                                                            if (isSelectOrderRequired && !selectOrder) {
                                                                                                setIsSelectOrderError(true);
                                                                                            }
                                                                                        }}
                                                                                />
                                                                            </div>

                                                                            {isSelectOrderError &&
                                                                                    <div className="select-field--error-message caption__regular">This field is required</div>}
                                                                        </div>
                                                                    </div>

                                                                    {/* Order table here */}
                                                                    {tableData.length != 0 ? <div className="table-list">
                                                                                <table role="table">
                                                                                    <thead>
                                                                                    <tr role="row">
                                                                                        <th role="columnheader">
                                                                                            <div className="body-normal__semibold">
                                                                                                Auftrag
                                                                                            </div>
                                                                                        </th>
                                                                                        <th role="columnheader">
                                                                                            <div className="body-normal__semibold">
                                                                                                Auftragsname
                                                                                            </div>
                                                                                        </th>
                                                                                        <th role="columnheader">
                                                                                            <div className="body-normal__semibold">
                                                                                                Adresse
                                                                                            </div>
                                                                                        </th>
                                                                                        <th role="columnheader">
                                                                                            <div className="body-normal__semibold">
                                                                                                Verantwortlicher
                                                                                            </div>
                                                                                        </th>
                                                                                        <th role="columnheader">
                                                                                            <div className="body-normal__semibold">
                                                                                                Benachrichtigung
                                                                                            </div>
                                                                                        </th>
                                                                                        <th role="columnheader">
                                                                                        </th>
                                                                                    </tr>
                                                                                    </thead>

                                                                                    <tbody>
                                                                                    {tableData.map(order => (
                                                                                            <tr key={order.value}>
                                                                                                <td role="cell"
                                                                                                    className="body-normal__regular"
                                                                                                    data-label="Auftrag">{order.value}</td>
                                                                                                <td role="cell"
                                                                                                    className="body-normal__regular"
                                                                                                    data-label="Auftragsname">{order.name}</td>
                                                                                                <td role="cell"
                                                                                                    className="body-normal__regular"
                                                                                                    data-label="Adresse">{order.address}</td>
                                                                                                <td role="cell"
                                                                                                    className="body-normal__regular"
                                                                                                    data-label="Verantwortlicher">{order.responsible}</td>
                                                                                                <td role="cell"
                                                                                                    className="body-normal__regular"
                                                                                                    data-label="Benachrichtigung">
                                                                                                    <label className="form-checkbox">
                                                                                                        <input type="checkbox"/>
                                                                                                    </label>
                                                                                                </td>
                                                                                                <td role="cell"
                                                                                                    className="table-list__button"
                                                                                                    data-label=" ">
                                                                                                    <div
                                                                                                            className="button button-gost button--grey"
                                                                                                            onClick={() => handleRemoveOrder(order.value)}
                                                                                                    >
                                                                                                        <i className="button__icon icon-trash"></i>
                                                                                                    </div>
                                                                                                </td>
                                                                                            </tr>
                                                                                    ))}
                                                                                    </tbody>

                                                                                </table>
                                                                            </div>
                                                                            :
                                                                            <span className="create-user__form--text body-normal__regular">Sie haben keine Aufträge zugewiesen</span>
                                                                    }
                                                                </div>
                                                            </>
                                                    }

                                                </div>
                                            </div>
                                    )
                            )}

                        </ModalBody>
                        <ModalFooter>
                            {loading ? (
                                    " "
                            ) : (
                                    confirmation ? (
                                            <button className="button button-secondary button--big button--light-grey"
                                                    onClick={handleClose}>
                                                <span className="button__text">Schließen</span>
                                            </button>
                                    ) : (
                                            <>
                                                <button className="button button-secondary button--big button--light-grey"
                                                        onClick={handleClose}>
                                                    <span className="button__text">Abbrechen</span>
                                                </button>
                                                <button className="button button--big button--green"
                                                        type="submit">
                                                    <i className="button__icon icon-user-plus"></i>
                                                    <span className="button__text">Nutzer aktualisieren</span>
                                                </button>
                                            </>
                                    )
                            )}

                        </ModalFooter>
                    </form>

                </Modal>
            </>
    )
};

export default EditUserModal;