import React, { useState } from "react";
import './UploadImage'
const UploadImage = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const imageSubmitHandler = () => {

  }

  const handleClick = () => {
    props.toggle();
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClick}>X   </span>
        <p>I'm A Pop Up!!!</p>
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
    </div>

  )
}

export default UploadImage;