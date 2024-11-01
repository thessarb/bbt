import React, {useState} from "react";
import PlaneHochladenFormItem from "src/components/panel/documents/PlaneHochladenFormItem";

interface PlaneHochladenFormProps {
    onUploadChange: (value: string) => void;
}

const PlaneHochladenForm: React.FC<PlaneHochladenFormProps> = ({ onUploadChange }) => {

    // Radio buttons
    const [upload, setUpload] = useState("upload");
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedUpload = e.target.value;
        setUpload(selectedUpload);
        onUploadChange(selectedUpload);
    };

    // upload dialog button
    const [index, setIndex] = useState(1);
    const [dialog, setDialog] = useState(false);
    const handleDialogChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        setDialog(true);
        setIndex(index + 1);
    };

    return (
            <>
                <div className="upload-plan">
                    <form className="form" method="post">
                        <div className="upload-plan__content">

                            <div className="upload-plan__box form-radio">
                                <label className="body-normal__regular radio-button">
                                    <input className="radio-input"
                                           type="radio"
                                           value="upload"
                                           checked={upload === "upload"}
                                           onChange={handleRadioChange}
                                    />
                                    Datei(en) hochladen
                                </label>
                                <label className="body-normal__regular radio-button">
                                    <input className="radio-input"
                                           type="radio"
                                           value="link"
                                           checked={upload === "link"}
                                           onChange={handleRadioChange}
                                    />
                                    Planserver Link senden
                                </label>
                            </div>

                            <PlaneHochladenFormItem index={1} upload={upload}/>

                            {!dialog && upload === "upload" &&
                                    <>
                                        <div className="divider">
                                            <span className="divider__dotted"></span>
                                        </div>

                                        <div className="upload-plan__button">
                                            <button onClick={handleDialogChange}
                                                    className="button button-secondary button--green button--big">
                                                <i className="button__icon icon-plus"></i>
                                                <span className="button__text">Weitere Datei hochladen</span>
                                            </button>
                                        </div>
                                    </>
                            }

                            {dialog && upload === "upload" &&
                                    <>
                                        <div className="divider">
                                            <span className="divider__dotted"></span>
                                        </div>

                                        <PlaneHochladenFormItem index={index} upload={upload}/>
                                    </>
                            }

                            <div className="divider">
                                <span className="divider__solid"></span>
                            </div>

                        </div>
                    </form>
                </div>
            </>
    );
};

export default PlaneHochladenForm;