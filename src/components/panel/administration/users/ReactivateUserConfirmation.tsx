import React from "react";

interface ReactivateUserConfirmationProps {
    name: string;
    lastName: string;
    validations: string;
}
const ReactivateUserConfirmation: React.FC<ReactivateUserConfirmationProps> = ({name, lastName, validations}) => {

    return (
            <>
            {!validations ?
                    <div className="delete-user__text body-big__regular">
                        Benutzer
                        <span className="body-big__medium">{` “${name} ${lastName}” `}</span>
                        wurde erfolgreich reaktiviert.
                    </div>
                    :
                    <div className="reactivate-user__text body-big__regular">
                        {validations}
                    </div>
            }
            </>
    )
};

export default ReactivateUserConfirmation;