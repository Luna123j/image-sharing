import React, { useState } from "react";

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const imageSubmitHandler = () => {

  }

  return (
    <div>
      {selectedImage && (
        <div>
          <form onSubmit={imageSubmitHandler}>
            <img alt="error showing image" width={"250px"} src={URL.createObjectURL(selectedImage)} />
            <br />
            <button onClick={() => setSelectedImage(null)}>Remove</button>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      <br />

      <br />
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  )
}

export default UploadImage;