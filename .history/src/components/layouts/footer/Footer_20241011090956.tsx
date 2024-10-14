import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-md-6 developed-by body-small__semibold">
          Made with{" "} <i className="icon heart-icon mx-1" /> by {"  "}
          <a
            // href="https://"
            target="_blank"
            className="ms-1"
            rel="noreferrer"
          >
           {" "}Thommas Groupe{" "}
          </a>
          .
        </div>
      </div>
    </footer>
  );
};

export default Footer;
