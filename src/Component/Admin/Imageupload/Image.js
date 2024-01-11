import React, { useContext, useState } from 'react'
import "./Image.css"
import UserContext from "../../../Usercontext";
import axios from 'axios';
import Compress from "react-image-file-resizer";


function Image() {

  const userContext = useContext(UserContext)
  const [img, setImg] = useState();

  


  let uploadData = async (event) => {
    event.preventDefault();
    let base64 = img
    try {
      let imagedata = await axios.put(`http://localhost:5002/api/websitedata/newlogo`, {base64});
      alert("success" );
      userContext.loadData()
    } catch (error) {
      console.log(error)
    }
  }
  
 function onFileResize (e)  {
    const file = e.target.files[0];

Compress.imageFileResizer(
  file, 
  480, 
  480, 
  "JPEG", 
  70, 
  0, 
  (uri) => {
    console.log(uri);
    setImg(uri)
    // You upload logic goes here
  },
  "base64" 
);
}

  function convertImg(e) {
    console.log(e);
    if(e.target.files[0].size > 70000){
      alert("file size should be less then 70kb" );
   }else{
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
       
       console.log(img)
      
    };
    reader.onerror = (error) => {
      console.log("error: ", error);
    };
   }
    
  }

  return<>
  <section className='image-upload-container'>
    <div className='page-tittle'>Update Logo Image</div>

    <div className='upload-form'>
     
      <div className='row'>
      <label className='file-label'>Choice Image :</label>
      <input type='file'  onChange={onFileResize } className='image-input' accept="image/png, image/gif, image/jpeg"></input></div>
      {img ? (
            <img width={100} height={100} src={img} />
          ) : (
            <div>upload something</div>
          )}
      <button onClick={uploadData} className='file-submit-button'>Upload</button>
    </div>
  </section>

  <section className='image-upload-container'>
    <div className='page-tittle'>Update Button Text</div>

    <div className='upload-form'>
     
      <div className='row'>
      <label className='file-label'>Type your Text :</label>
      <input type='text'  onChange={convertImg} className='image-input' accept="image/png, image/gif, image/jpeg"></input></div>
      <button onClick={uploadData} className='file-submit-button'>Upload</button>
    </div>
  </section>
  </>
}

export default Image