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

                            <PlaneHochladenFormItem upload={upload}/>

                            {upload === "link" &&
                                    <>
                                        <div className="divider">
                                            <span className="divider__solid"></span>
                                        </div>
                                    </>
                            }

                        </div>
                    </form>
                </div>
            </>
    );
};

export default PlaneHochladenForm;