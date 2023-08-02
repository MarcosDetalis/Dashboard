import { useState, useRef } from "react";
import "./style.css";
import img from './main.png'

function ImageUpload() {
  const [image, setImage] = useState(null);
  const hiddenFileInput = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imgname = event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = Math.max(img.width, img.height);
        canvas.width = maxSize;
        canvas.height = maxSize;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(
          img,
          (maxSize - img.width) / 2,
          (maxSize - img.height) / 2
        );
        canvas.toBlob(
          (blob) => {
            const file = new File([blob], imgname, {
              type: "image/png",
              lastModified: Date.now(),
            });

            console.log(file);
            setImage(file);
          },
          "image/jpeg",
          0.8
        );
      };
    };
  };

  const handleUploadButtonClick = (file) => {
  
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
 
  const limpiarimg = ()=>{
    setImage('');
  }

  return (
    <div className="image-upload-container">
      <div className="box-decoration">
        <label htmlFor="image-upload-input" className="image-upload-label">
          {image ? image.name : "Agregar imagen"}
        </label>
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="upload image"
              className="img-display-after"
            />
          ) : (
           <div>    </div>
          )}

          <input
            id="image-upload-input"
            type="file"
            onChange={handleImageChange}
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
        </div>

        {image ? (
           <i className="material-icons p-2" id="delete" onClick={limpiarimg}>
            &#xE872; 
         </i> 

          ) : (
           <div>    </div>
          )}

      </div>
    </div>
  );
}
export default ImageUpload;