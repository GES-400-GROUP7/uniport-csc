import React, {useState} from 'react'
import icon from "../Hero/images/upload-icon.png"
function Uploader() {
    const [file, setFile] = useState(null)
        return (
        <div className="border flex flex-col items-center justify-center p-6 relative">
            <div className="flex flex-col items-center gap-2">
                <img className="w-12" src={icon} alt="upload-icon" />
                <p className="text-center text-gray-400 text-[15px]">Drag and drop your file here or</p>
                <button className='text-[7px] font-semibold text-white bg-[#0042A5] px-4 py-2 md:'>BROWSE FILES</button>
            </div>
            <input 
            className=" absolute fileInput cursor-pointer p-6 w-full h-full opacity-0 rounded z-10" 
            type="file" 
            name="O-level"
            onChange={(e)=> setFile(e.target.files[0])}/>
           {file ?
            <p className="text-center font-semibold text-[15px] text-gray-400 mt-3">{file.name}</p>
           :<p className="text-center font-semibold text-[15px] text-gray-400 mt-3">No File Selected</p>}
        </div>
    )
}

export default Uploader