import React from "react";
import Loading from "../helpers/Loading";

const Confirmation = () => {
    return (
        <div className="confirmation">
            <Loading />
            <span className="confirmation__text heading__regular">
                Daten werden aktualisiert...
            </span>
        </div>
    );
};

export default Confirmation;
