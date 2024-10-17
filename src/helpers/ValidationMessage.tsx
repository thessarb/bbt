import React from "react";

interface ValidationMessageProps {
  message: string | string[];
}

const ValidationMessage: React.FC<ValidationMessageProps> = ({ message }) => {
  return <div className="error-message">{message}</div>;
};

export default ValidationMessage;
