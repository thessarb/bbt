import React, { Fragment, useState, useRef, useEffect } from "react";

const UserDropdown = () => {
  return (
    <div className="user-info-dropdown">
      <div className="user-info-dropdown__header heading__semibold">
        <span>Benutzer Informationen</span>
        <button className="button button-gost button--big button--grey">
          <i className="button__icon icon-x"></i>
        </button>
      </div>
      <div className="user-info-dropdown__body">
        <p className="user-info-dropdown__user caption__regular">
          Eingeloggt als:
        </p>
        <p className="user-info-dropdown__user-name body-big__medium">
          Vorname Nachname{" "}
          <span className="user-info-dropdown__user-email body-normal__regular">
            vorname.nachname@firma.de
          </span>
        </p>
        <p className="user-info-dropdown__date body-small__regular">
          Registriert: 10.09.2024
        </p>
        <hr />
        <span className="user-info-dropdown__change-password-link body-normal__regular">
          Passwort ändern
        </span>
      </div>
    </div>
  );
};

export default UserDropdown;
