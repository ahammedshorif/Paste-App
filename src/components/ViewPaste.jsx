import React from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function ViewPaste() {
   
   const allPastes = useSelector((state)=> state.paste.pastes)
   const params= useParams();
   const pasteId = params.pasteId
   const paste = allPastes.find((p)=> p._id===pasteId);
   console.log(paste);
   
     
   
  return (
    <div className="">
        <div className='w-full'>
           <h1 className='bg-blue-500 p-2 text-2xl font-bold'>Title: {paste.title}</h1>
                                 
           <div>
              <div className='flex justify-end bg-blue-950 p-2'>
                <button 
                  className='bg-white text-black p-1 rounded-lg cursor-pointer'

                  onClick={()=>{
                    navigator.clipboard.writeText(paste?.content);
                    toast.success("Copy Successfully")
                  }}
                >Copy</button>
              </div>
              <textarea 
              className="w-full rounded-b-xl min-h-[400px] bg-black p-2 border-2 md:min-w-[700px]  md:min-h-[400px]"
              name="" 
              id=""
              disabled
              value={paste.content}
              
              
              />

              
           </div>
        </div>
    </div>
  )
}

export default ViewPaste