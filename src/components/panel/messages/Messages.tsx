import React from "react";

const Messages = () => {

    return (
        <>
            <div className="table-list table-list--accordion">

                <table role="table">
                    <thead>
                    <tr role="row">
                        <th role="columnheader">
                        </th>
                        <th role="columnheader">
                            <div className='body-normal__semibold'>
                                Auftrag
                                <i className="icon-dots-three-vertical"></i>
                            </div>
                        </th>
                        <th role="columnheader">
                            <div className='body-normal__semibold'>
                                Name
                                <i className="icon-dots-three-vertical"></i>
                            </div>
                        </th>
                        <th role="columnheader">
                            <div className='body-normal__semibold'>
                                Adresse
                                <i className="icon-dots-three-vertical"></i>
                            </div>
                        </th>
                        <th role="columnheader">
                            <div className='body-normal__semibold'>
                                Verantwortlicher
                                <i className="icon-dots-three-vertical"></i>
                            </div>
                        </th>
                        <th role="columnheader">
                            <div className='body-normal__semibold'>
                                Teilaufträge
                                <i className="icon-dots-three-vertical"></i>
                            </div>
                        </th>
                        <th role="columnheader">
                            <div className='body-normal__semibold'>

                            </div>
                        </th>

                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td role="cell" className='body-normal__regular'>
                            <i className="icon-caret-right"></i>
                        </td>
                        <td role="cell" className='body-normal__regular' data-label={'Auftrag'}>80700</td>
                        <td role="cell" className='body-normal__regular' data-label={'Name'}>München Isar</td>
                        <td role="cell" className='body-normal__regular' data-label={'Adresse'}>Biergartenallee 1
                            80311 München
                        </td>
                        <td role="cell" className='body-normal__regular' data-label={'Verantwortlicher'}>Thomas
                            Mustermann
                        </td>
                        <td role="cell" className='body-normal__regular' data-label={'Teilaufträge'}>8</td>
                        <td role="cell" className='table-list__button' data-label={' '}>
                            <div className='button button-gost button--big button--grey'>
                                <i className="button__icon icon-note-pencil"></i>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td role="cell" className='body-normal__regular'>
                            <i className="icon-caret-right"></i>
                        </td>
                        <td role="cell" className='body-normal__regular' data-label={'Auftrag'}>80700</td>
                        <td role="cell" className='body-normal__regular' data-label={'Name'}>München Isar</td>
                        <td role="cell" className='body-normal__regular' data-label={'Adresse'}>Biergartenallee 1
                            80311 München
                        </td>
                        <td role="cell" className='body-normal__regular' data-label={'Verantwortlicher'}>Thomas
                            Mustermann
                        </td>
                        <td role="cell" className='body-normal__regular' data-label={'Teilaufträge'}>8</td>
                        <td role="cell" className='table-list__button' data-label={' '}>
                            <div className='button button-gost button--big button--grey'>
                                <i className="button__icon icon-note-pencil"></i>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td role="cell" className='body-normal__regular'>
                            <i className="icon-caret-right"></i>
                        </td>
                        <td role="cell" className='body-normal__regular' data-label={'Auftrag'}>80700</td>
                        <td role="cell" className='body-normal__regular' data-label={'Name'}>München Isar</td>
                        <td role="cell" className='body-normal__regular' data-label={'Adresse'}>Biergartenallee 1
                            80311 München
                        </td>
                        <td role="cell" className='body-normal__regular' data-label={'Verantwortlicher'}>Thomas
                            Mustermann
                        </td>
                        <td role="cell" className='body-normal__regular' data-label={'Teilaufträge'}>8</td>
                        <td role="cell" className='table-list__button' data-label={' '}>
                            <div className='button button-gost button--big button--grey'>
                                <i className="button__icon icon-note-pencil"></i>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
};

export default Messages;