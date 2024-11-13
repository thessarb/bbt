import React from "react";

interface ValidationMessageProps {
  message: string | string[];
}

const ValidationMessage: React.FC<ValidationMessageProps> = ({ message }) => {
  return <span className="caption__regular error-message">{message}</span>;
};

export default ValidationMessage;
