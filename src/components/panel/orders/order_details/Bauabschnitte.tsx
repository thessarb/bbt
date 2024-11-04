const Bauabschnitte = () => {
    return (
        <>
            <div className="table-list table-list--accordion thomas-plane">
                <table role="table">
                    <thead>
                        <tr role="row">
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    BA
                                    <i className="icon-dots-three-vertical"></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Haus
                                    <i className="icon-dots-three-vertical"></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Geschoss
                                    <i className="icon-dots-three-vertical"></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Ebene
                                    <i className="icon-dots-three-vertical"></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Produkt
                                    <i className="icon-dots-three-vertical"></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Plan Nr.
                                    <i className="icon-dots-three-vertical"></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Status
                                    <i className="icon-dots-three-vertical"></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Planung
                                    <i className="icon-dots-three-vertical"></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Soll-Freigabe
                                    <i className="icon-dots-three-vertical"></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Wunschlieferung
                                    <i className="icon-dots-three-vertical"></i>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td role="cell" className="body-normal__regular" data-label={"BA"}>
                                1
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Haus"}>
                                Haus 1
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Geschoss"}>
                                KG
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Ebene"}>
                                Abschnitt A, Abschnitt B
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Produkt"}>
                                Decke
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Plan Nr."}>
                                <div className="text-icon">D02</div>
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Status"}>
                                <div className="tag tag--orange">In Freigabe</div>
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Planung"}>
                                abgeschlossen
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Soll-Freigabe"}>
                                13.08.2024
                            </td>
                            <td role="cell" className="body-normal__regular no-actions green-text" data-label={"Wunschlieferung"}>
                                13.08.2024
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};
export default Bauabschnitte;
