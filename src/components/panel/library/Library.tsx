import React from "react";

const Library = () => {

    return (
        <>
            <div className="table-list table-list--secondary">
                <table role="table">
                    <thead>
                    <tr role="row">
                        <th role="columnheader">
                            <div className='body-normal__semibold'>
                                Art
                                <i className="icon-dots-three-vertical"></i>
                            </div>
                        </th>
                        <th role="columnheader">
                            <div className='body-normal__semibold'>
                                Datum
                                <i className="icon-dots-three-vertical"></i>
                            </div>
                        </th>
                        <th role="columnheader">
                            <div className='body-normal__semibold'>
                                Beschreibung
                                <i className="icon-dots-three-vertical"></i>
                            </div>
                        </th>
                        <th role="columnheader">
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td role="cell" className='body-normal__regular' data-label={'Art'}>Montageanleitung</td>
                        <td role="cell" className='body-normal__regular' data-label={'Datum'}>01.01.2024</td>
                        <td role="cell" className='body-normal__regular' data-label={'Beschreibung'}>Montageanleitungen
                            Betonbauteile
                        </td>

                        <td role="cell" className='table-list__button' data-label={' '}>
                            <div className="button button-gost button--big button--grey">
                                <i className="button__icon icon-download-simple"></i>
                            </div>
                            <div className='button button-gost button--big button--grey'>
                                <i className="button__icon icon-eye"></i>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td role="cell" className='body-normal__regular' data-label={'Art'}>Montageanleitung</td>
                        <td role="cell" className='body-normal__regular' data-label={'Datum'}>01.01.2024</td>
                        <td role="cell" className='body-normal__regular' data-label={'Beschreibung'}>Montageanleitungen
                            Betonbauteile
                        </td>

                        <td role="cell" className='table-list__button' data-label={' '}>
                            <div className="button button-gost button--big button--grey">
                                <i className="button__icon icon-download-simple"></i>
                            </div>
                            <div className='button button-gost button--big button--grey'>
                                <i className="button__icon icon-eye"></i>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td role="cell" className='body-normal__regular' data-label={'Art'}>Montageanleitung</td>
                        <td role="cell" className='body-normal__regular' data-label={'Datum'}>01.01.2024</td>
                        <td role="cell" className='body-normal__regular' data-label={'Beschreibung'}>Montageanleitungen
                            Betonbauteile
                        </td>
                        <td role="cell" className='table-list__button' data-label={' '}>
                            <div className="button button-gost button--big button--grey">
                                <i className="button__icon icon-download-simple"></i>
                            </div>
                            <div className='button button-gost button--big button--grey'>
                                <i className="button__icon icon-eye"></i>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
};

export default Library;