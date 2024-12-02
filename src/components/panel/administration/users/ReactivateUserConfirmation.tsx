import React from "react";

interface ReactivateUserConfirmationProps {
    name: string;
    lastName: string;
}
const ReactivateUserConfirmation: React.FC<ReactivateUserConfirmationProps> = ({name, lastName}) => {

    return (
            <>
                <div className="delete-user__text body-big__regular">
                    Benutzer
                    <span className="body-big__medium">{` “${name} ${lastName}” `}</span>
                    wurde erfolgreich reaktiviert.
                </div>
            </>
    )
};

export default ReactivateUserConfirmation;