import React, {useState} from "react";

interface UploadFileProps {
    inputId: string;
}

const UploadFile: React.FC<UploadFileProps> = ({ inputId }) => {
    // Upload file
    const isUploadRequired = true;
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [fileErrors, setFileErrors] = useState<boolean[]>([]);
    const [noFileSelectedError, setNoFileSelectedError] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const maxFileSize = 5 * 1024 * 1024; // 5MB
    const maxFileCount = 1; // Maximum number of files allowed
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setNoFileSelectedError(false);

        if (selectedFiles.length >= maxFileCount) {
            return;
        }

        if (file) {
            setSelectedFiles([...selectedFiles, file]);
            setFileErrors([...fileErrors, file.size > maxFileSize]);
        }
    };

    const checkNoFileSelected = () => {
        if (isUploadRequired && selectedFiles.length <= 1) {
            setNoFileSelectedError(true);
        } else {
            setNoFileSelectedError(false);
        }
    };

    const handleRemoveFile = (index: number) => {
        const updatedFiles = [...selectedFiles];
        const updatedErrors = [...fileErrors];
        updatedFiles.splice(index, 1);
        updatedErrors.splice(index, 1);
        setSelectedFiles(updatedFiles);
        setFileErrors(updatedErrors);
        checkNoFileSelected();
    };

    return (
            <>
                <div className="upload">
                    <div className="upload__title caption__regular">
                        Datel
                        {isUploadRequired && <span className="upload__title--required">*</span>}
                    </div>
                    <label htmlFor={`upload-${inputId}`} className="upload__content">
                        <input className="upload__content--input"
                               type="file"
                               id={`upload-${inputId}`}
                               name={`upload-${inputId}`}
                               onChange={handleFileChange}
                               onClick={(e) => ((e.target as HTMLInputElement).value = '')}
                        />
                        <span className="upload__content--icon icon-file-arrow-up"></span>
                        <div className="upload__content--box">
                                    <span className="body-normal__regular">
                                        Klicke oder schiebe die Datei hierher zum Upload
                                    </span>
                            <span className="caption__regular">
                                        Maximale Dateigröße ist<span className="caption__semibold"> 5MB</span>
                                    </span>
                        </div>
                    </label>
                    {noFileSelectedError && (
                            <span className="upload__required caption__regular">
                                        Bitte wählen Sie mindestens eine Datei aus.
                                    </span>
                    )}
                    {selectedFiles.length > 0 && (
                            <div className="upload__file-list">
                                {selectedFiles.map((file, index) => (
                                        <div className="upload__file" key={index}>
                                                    <span
                                                            className={`upload__file--icon ${
                                                                    fileErrors[index] ? 'icon-x' : isUploading ? 'icon-loading' : 'icon-check'
                                                            }`}
                                                    ></span>
                                            <span className={`upload__file--name body-small__regular ${
                                                    fileErrors[index] ? 'upload__file--name-error' : ''
                                            }`}
                                            >
                                                        {file.name}
                                                    </span>
                                            {fileErrors[index] ? (
                                                    <span className="upload__file--limit-error caption__regular">
                                                                Dateigröße ist zu groß. Das Limit ist 5MB.
                                                            </span>
                                            ) : (
                                                    <span className="upload__file--size body-small__regular">
                                                                {isUploading ? ' ' : `${(file.size / 1024 / 1024).toFixed(1)} MB`}
                                                            </span>
                                            )}
                                            <button className="upload__file--remove button button-gost button--grey"
                                                    onClick={() => handleRemoveFile(index)}>
                                                <i className="button__icon icon-x"></i>
                                            </button>
                                        </div>
                                ))}
                            </div>
                    )}
                </div>

            </>
    );
};

export default UploadFile;