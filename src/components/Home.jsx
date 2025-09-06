import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

function Home() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch= useDispatch();
  const allPastes = useSelector((state)=> state.paste.pastes)

  function createPaste(){
      const paste = {
        title:title,
        content:value,
        _id:pasteId || Date.now().toString(35),
        createdAt: new Date().toLocaleString(),

      }


      if(pasteId){
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

  useEffect(()=>{
         if(pasteId){
            const paste = allPastes.find((p)=>p._id===pasteId);
            setTitle(paste.title)
            setValue(paste.content)
         }
      },[pasteId])


  return (
    <div className="">
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="p-2 rounded-xl bg-black w-[60%] border-2"
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button className="bg-blue-400 cursor-pointer p-2 rounded-xl" onClick={createPaste}>
          {pasteId ? "Update Paste" : "Create Paste"}
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
