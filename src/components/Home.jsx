import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

function Home() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const PasteId = searchParams.get("pasteId");
  const dispatch= useDispatch();

  function createPaste(){
      const paste = {
        title:title,
        content:value,
        _id:PasteId || Date.now().toString(35),
        createdAt: new Date().toISOString(),

      }

      if(PasteId){
          //update paste
          dispatch(updateToPastes(paste))
      }
      else{
          //create paste
          dispatch(addToPastes(paste))
      }

      //after creation or updation
      setTitle("")
      setValue("")
      setSearchParams("")
  }
  return (
    <div className="">
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="p-2 rounded-2xl bg-black w-[60%] border-2"
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button className="bg-blue-400 cursor-pointer p-2 rounded-2xl" onClick={createPaste}>
          {PasteId ? "Update Paste" : "Create Paste"}
        </button>
      </div>
      <div>
          <textarea 
            className=" w-full rounded-2xl mt-4 min-h-[400px] p-2 bg-black border-2 md:min-w-[700px]  md:min-h-[400px]" 
            value={value}
            placeholder="Enter Content"
            onChange={(e)=>{
                setValue(e.target.value)
            }}
          />
      </div>
    </div>
  );
}

export default Home;
