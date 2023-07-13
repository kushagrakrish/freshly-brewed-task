import React, { useState } from "react";
import UploadIcon from "@mui/icons-material/Upload";
import DeleteIcon from "@mui/icons-material/Delete";

const ProfileUploader = () => {
  const [uploadedPhoto, setUploadedPhoto] = useState(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeletePhoto = () => {
    setUploadedPhoto(null);
  };

  return (
    <>
      <div className='flex items-center gap-5'>
        <div
          className='w-16 h-16 rounded-full bg-[#D9D9D9]'
          style={{
            backgroundImage: `url(${uploadedPhoto})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {uploadedPhoto && (
            <div
              className='flex items-center justify-center w-full h-full rounded-full bg-black bg-opacity-50 cursor-pointer'
              onClick={handleDeletePhoto}
            >
              <DeleteIcon className='text-white' />
            </div>
          )}
        </div>

        <label
          htmlFor='photo-upload'
          className='flex items-center gap-2 font-semibold font-inter px-2 py-2 border-2 border-[#047E70] cursor-pointer'
        >
          <UploadIcon />
          <input
            type='file'
            id='photo-upload'
            className='hidden'
            accept='image/*'
            onChange={handlePhotoUpload}
          />
          Upload Photo
        </label>
      </div>
    </>
  );
};

export default ProfileUploader;
