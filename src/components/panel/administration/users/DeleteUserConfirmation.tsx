import React from "react";

interface DeleteUserConfirmationProps {
    name: string;
    lastName: string;
}
const DeleteUserConfirmation: React.FC<DeleteUserConfirmationProps> = ({name, lastName}) => {

    return (
            <>
                <div className="delete-user__text body-big__regular">
                    Benutzer
                    <span className="body-big__medium">
                        {` “${name} ${lastName}” `}
                    </span>
                    wurde deaktiviert.
                </div>
            </>
    )
};

export default DeleteUserConfirmation;