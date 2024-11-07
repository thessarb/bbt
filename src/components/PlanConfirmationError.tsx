import React from "react";

interface PlanConfirmationErrorProps {
    onGoBack: () => void;
}
const PlanConfirmationError: React.FC<PlanConfirmationErrorProps> = ({ onGoBack }) => {
    return (
            <div className="confirmation--secondary__error-box">
                <div className="confirmation--secondary confirmation--secondary__error body-normal__semibold">
                    <i className="confirmation--secondary__icon icon-x"></i>
                    Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.
                </div>

                <div onClick={onGoBack} className="confirmation--secondary__button button button-gost button--green">
                    <i className="button__icon icon-arrow-left"></i>
                    <span className="button__text">Zurück</span>
                </div>
            </div>

    );
};

export default PlanConfirmationError;
