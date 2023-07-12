import React from "react";
import UploadIcon from "@mui/icons-material/Upload";

const ProfileUploader = () => {
  return (
    <>
      <div className='flex items-center gap-5'>
        <div className='w-16 h-16 rounded-full bg-gray-400'></div>

        <button className='flex items-center gap-2 font-semibold font-inter px-2 py-2 border-2 border-[#047E70]'>
          <UploadIcon />
          <input type='file' className='hidden' />
          Upload Photo
        </button>
      </div>
    </>
  );
};

export default ProfileUploader;
