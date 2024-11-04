import React from "react";
import Loading from "src/helpers/Loading";

const LoadingComponent = () => {
    return (
        <div className="confirmation">
            <Loading />
            <span className="confirmation__text heading__regular">
                Daten werden aktualisiert...
            </span>
        </div>
    );
};

export default LoadingComponent;
