import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-md-6 copyright">
          © 2024 Albanian Business Partner. All rights reserved.
        </div>
        <div className="col-md-6 developed-by">
          Made with <i className="icon heart-icon mx-1" /> by{" "}
          <a
            href="https://abp.al/en/"
            target="_blank"
            className="ms-1"
            rel="noreferrer"
          >
            Thommas Groupe{" "}
          </a>
          .
        </div>
      </div>
    </footer>
  );
};

export default Footer;
