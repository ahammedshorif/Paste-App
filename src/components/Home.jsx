import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Home() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const PasteId = searchParams.get("pasteId");
  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="p-2 rounded-2xl bg-black"
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button className="bg-blue-400 cursor-pointer p-2 rounded-2xl">
          {PasteId ? "Update Paste" : "Create Paste"}
        </button>
      </div>
      <div>
          <textarea 
            className="rounded-2xl mt-4 min-w-[700px] min-h-[400px] p-2 bg-black"
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
