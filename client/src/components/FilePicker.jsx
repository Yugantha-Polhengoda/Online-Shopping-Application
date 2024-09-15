import React from 'react'
import state from '../store'
import { CustomButton } from '../components'

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col items-center mt-4">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="hidden"
        />
        <label
          htmlFor="file-upload"
          className="filepicker-label cursor-pointer text-white py-2 px-4 rounded-lg"
        >
          Upload File
        </label>
        <div className=" max-w-44">
          <p className="mt-2 text-gray-700 text-sm truncate">
            {file === "" ? "No File Selected" : file.name}
          </p>
        </div>
      </div>

      <div className="mt-20 flex gap-3">
        <CustomButton
          type="outline"
          title="Logo"
          handleClick={() => readFile("logo")}
          CustomStyle="text-xs"
        />

        <CustomButton
          type="filled"
          title="Full"
          handleClick={() => readFile("full")}
          CustomStyle="text-xs"
        />
      </div>
    </div>
  );
}

export default FilePicker
