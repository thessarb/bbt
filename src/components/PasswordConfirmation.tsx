import React from "react";

const PasswordConfirmation = () => {
    return (
            <div className="confirmation__password">
                <div className="confirmation__password--box body-normal__semibold">
                    <i className="confirmation__password--icon icon-check"></i>
                    Ihr Passwort wurde erfolgreich geändert.
                </div>
                <div className="body-normal__regular">
                    Sie werden zur Login Seite weitergeleitet, um sich erneut anzumelden.
                </div>
            </div>
    );
};

export default PasswordConfirmation;