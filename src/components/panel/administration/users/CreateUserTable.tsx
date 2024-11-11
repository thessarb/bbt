import React from "react";

const CreateUserTable = () => {
    return (
            <>
                <div className="table-list">
                    <table role="table">
                        <thead>
                            <tr role="row">
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Auftrag
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Auftragsname
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Adresse
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Verantwortlicher
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Benachrichtigung
                                </div>
                            </th>
                            <th role="columnheader">
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td
                                    role="cell"
                                    className="body-normal__regular"
                                    data-label={"Auftrag"}
                            >
                                80700
                            </td>
                            <td
                                    role="cell"
                                    className="body-normal__regular"
                                    data-label={"Auftragsname"}
                            >
                                München Isar
                            </td>
                            <td
                                    role="cell"
                                    className="body-normal__regular"
                                    data-label={"Adresse"}
                            >
                                Biergartenallee 1, 80311 München
                            </td>
                            <td
                                    role="cell"
                                    className="body-normal__regular"
                                    data-label={"Verantwortlicher"}
                            >
                                Hauptverantwortlicher
                            </td>
                            <td
                                    role="cell"
                                    className="body-normal__regular"
                                    data-label={"Benachrichtigung"}
                            >
                                <label className="form-checkbox">
                                    <input type="checkbox"/>
                                </label>
                            </td>

                            <td role="cell" className="table-list__button" data-label={" "}>
                                <div className='button button-gost  button--grey'>
                                    <i className="button__icon icon-trash"></i>
                                </div>

                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </>
    );
}

export default CreateUserTable;