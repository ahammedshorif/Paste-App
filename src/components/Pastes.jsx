import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';

function Pastes() {
  const [searchTerm,setSeachTerm] = useState("")
  const pastes = useSelector((state)=>state.paste.pastes)
  console.log(pastes);

  const dispatch= useDispatch();
  const filtereData = pastes.filter(
    (paste)=>paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  function handleDelete(pasteId){
      dispatch(removeFromPastes(pasteId))
  }  

  function handleCopy(paste){
     console.log(paste.content);
     navigator.clipboard.writeText(paste?.content)
     toast.success("Copy to Clipboard")
   
  }
  return (
    <div>
        <input 
        className='p-2 rounded-xl min-w-[300px] border-2 md:min-w-[700px] mb-5'
        type="text"
        placeholder='Search here'
        value={searchTerm}
        onChange={(e)=>{setSeachTerm(e.target.value)}}
         />

        <div className='flex flex-col gap-5'>
            {
              filtereData.length>0 && filtereData.map(
                (paste)=>{
                  return (
                    <div key={paste._id} className='border-2 p-4 rounded-lg'>
                       <div>{paste.title}</div>
                       <div>{paste.content}</div>
                       <div className='flex gap-2'>
                            <button>Edit</button>
                            <button>View</button>
                            <button onClick={()=> handleCopy(paste)}>Copy</button>
                            <button onClick={()=> handleDelete(paste._id)} className='bg-red-500 rounded-lg p-1 cursor-pointer'>Delete</button>
                            <button>Share</button>
                       </div>
                       <div>{paste.createdAt}</div>
                    </div>
                  )
                }

              )
            }

        </div>

    </div>
  )
}

export default Pastes