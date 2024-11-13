import React from "react";

interface ValidationMessageInvalidProps {
  message: string | string[];
}
const ValidationMessageInvalid: React.FC<ValidationMessageInvalidProps> = ({ message }) => {
    return <div className="input-field--error-message body-small__regular validation-space">{message}</div>;
  };
  
  export default ValidationMessageInvalid;