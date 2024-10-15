import React from 'react'

const UnreadMessages = () => {

    return (
        <>
            <div className="table-list">
                <div className="table-list__title">
                    <span className="table-list__title-left subheading__regular">
                        Ungelesene Systemnachrichten
                    </span>
                    <span className="table-list__title-right body-normal__regular">
                        Alle Systemnachrichten lesen
                    </span>
                </div>
                <table role="table">
                    <thead>
                    <tr role="row">
                        <th role="columnheader">
                            <div className='body-normal__semibold'>
                                Auftrag
                                <i className="icon-dots-three-vertical"></i>
                            </div>
                        </th>
                        <th role="columnheader">
                            <div className='body-normal__semibold'>
                                Auftragsname
                                <i className="icon-dots-three-vertical"></i>
                            </div>
                        </th>
                        <th role="columnheader">
                            <div className='body-normal__semibold'>
                                Betreff
                                <i className="icon-dots-three-vertical"></i>
                            </div>

                        </th>
                        <th role="columnheader">
                            <div className='body-normal__semibold'>
                                Inhalt
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
                                Kritisch
                                <i className="icon-dots-three-vertical"></i>
                            </div>
                        </th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td role="cell" className='body-normal__regular' data-label={'Auftrag'}>80700</td>
                        <td role="cell" className='body-normal__regular' data-label={'Auftragsname'}>München Isar</td>
                        <td role="cell" className='body-normal__regular' data-label={'Betreff'}>Verzögerung</td>
                        <td role="cell" className='body-normal__regular' data-label={'Inhalt'}>Lieferung der Massivwand
                            XY verzögert sich um X
                            Tage.
                        </td>
                        <td role="cell" className='body-normal__regular' data-label={'Datum'}>12.05.2024</td>
                        <td role="cell" className='body-normal__regular' data-label={'Kritisch'}>
                            <i className="icon-warning"></i>
                        </td>
                        <td role="cell" className='table-list__button' data-label={' '}>
                            <div className='button button-gost button--big button--grey'>
                                <i className="button__icon icon-envelope-simple"></i>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td role="cell" className='body-normal__regular' data-label={'Auftrag'}>80700</td>
                        <td role="cell" className='body-normal__regular' data-label={'Auftragsname'}>München Isar</td>
                        <td role="cell" className='body-normal__regular' data-label={'Betreff'}>Verzögerung</td>
                        <td role="cell" className='body-normal__regular' data-label={'Inhalt'}>Lieferung der Massivwand
                            XY verzögert sich um X
                            Tage.
                        </td>
                        <td role="cell" className='body-normal__regular' data-label={'Datum'}>12.05.2024</td>
                        <td role="cell" className='body-normal__regular' data-label={'Kritisch'}>
                            <i className="icon-warning"></i>
                        </td>
                        <td role="cell" className='table-list__button'>
                            <div className='button button-gost button--big button--grey'>
                                <i className="button__icon icon-envelope-simple"></i>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td role="cell" className='body-normal__regular' data-label={'Auftrag'}>80700</td>
                        <td role="cell" className='body-normal__regular' data-label={'Auftragsname'}>München Isar</td>
                        <td role="cell" className='body-normal__regular' data-label={'Betreff'}>Verzögerung</td>
                        <td role="cell" className='body-normal__regular' data-label={'Inhalt'}>Lieferung der Massivwand
                            XY verzögert sich um X
                            Tage.
                        </td>
                        <td role="cell" className='body-normal__regular' data-label={'Datum'}>12.05.2024</td>
                        <td role="cell" className='body-normal__regular' data-label={'Kritisch'}>
                            <i className="icon-warning"></i>
                        </td>
                        <td role="cell" className='table-list__button'>
                            <div className='button button-gost button--big button--grey'>
                                <i className="button__icon icon-envelope-simple"></i>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UnreadMessages;