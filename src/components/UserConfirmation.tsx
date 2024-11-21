import React from "react";
interface UserConfirmationProps {
    email: string;
}

const UserConfirmation: React.FC<UserConfirmationProps> = ({email}) => {
    return (
            <div className="confirmation__user">
                <div className="body-big__regular">
                    Eine Nachricht mit den Anmeldedaten wurde an
                    <span className="confirmation__user--email body-big__medium">
                        {`“${email}”`}
                    </span>
                    versendet.
                </div>
                <div className="body-big__regular">
                    Sie werden über eine erfolgreiche Registrierung benachrichtigt.
                </div>
            </div>
    );
};

export default UserConfirmation;
