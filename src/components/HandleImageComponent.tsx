import React, { ChangeEvent, useState } from "react";

interface HandleImageComponentProps {
  setImageURL: React.Dispatch<React.SetStateAction<string>>;
}

function HandleImageComponent({ setImageURL }: HandleImageComponentProps): JSX.Element {
  const [inputValue, setInputValue] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const imageFiles = e.target.files; // no need to restrict arrays here, as we might want to save multiple photos


    if (imageFiles && imageFiles.length > 0) {
      for (const file of imageFiles) { // saving each picture, might need to restructure interface

        const imageURL = URL.createObjectURL(file); // when we dont log, this can just be a call-function
        console.log("testing for saving picture as URL: ", imageURL); // removing const imageURL...
        
        setImageURL(imageURL);
      };
    };
  };


  const handleURL = (e: ChangeEvent<HTMLInputElement>) => { // handler for saving and setting the given URL
    const imageURL = e.target.value;
    setInputValue(imageURL);
    setImageURL(imageURL);
  };


  const handleRemoveFile =() => {
    setSelectedFile(null);
    setImageURL("");
  }

  return (
    <div>
      <p>Add a file</p>
      <input type="file" onChange={handleImage} />  {/* adding files */}
      <button onClick={handleRemoveFile}>Remove file</button>
      <p>Add a URL</p>
      <input type="text" value={inputValue} onChange={handleURL} /> {/* adding URL */}
     
    </div>
  );
};

export default HandleImageComponent;
