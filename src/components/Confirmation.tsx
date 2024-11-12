import React from "react";

const Confirmation = () => {
    return (
            <div className="confirmation">
                <div className="confirmation__text body-big__regular">
                    Vielen Dank für Ihre Freigabe. Wir haben folgende Personen über Ihre Freigabe informiert.
                </div>
                <div className="confirmation__admin body-big__medium">
                    Reuter, Ulf
                    <span className="confirmation__admin--email body-big__regular">ulf.reuther@thomas-gruppe.de</span>
                </div>
                <div className="confirmation__admin body-big__medium">
                    Staiger, Jörg
                    <span className="confirmation__admin--email body-big__regular">joerg.staiger@thomas-gruppe.de</span>
                </div>
            </div>
    );
};

export default Confirmation;
