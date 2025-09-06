import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';

import { Copy, Trash,SquarePen,Eye,Share} from "lucide-react"

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
    <div className='font-serif'>
        <input 
        className='p-2 rounded-xl min-w-[300px] border-2 md:min-w-[800px] mb-5'
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
                    <div key={paste._id} className='border-2 pt-2 px-4 rounded-lg'>
                       <div className='flex gap-2 justify-end'>
                            <button><Link to={`/?pasteId=${paste?._id}`}><SquarePen size={20} color="#ffffff" strokeWidth={1.25} className='cursor-pointer'/></Link></button>
                            <button> <Link to={`/pastes/${paste?._id}`}><Eye size={20} color="#ffffff" strokeWidth={1.25} className='cursor-pointer' /></Link></button>
                            <button onClick={()=> handleCopy(paste)}><Copy size={20} color="#ffffff" strokeWidth={1.25} className='cursor-pointer'/></button>
                            <button onClick={()=> handleDelete(paste._id)} ><Trash size={20} color="#ffffff" strokeWidth={1.25} className='cursor-pointer' /> </button>
                            <button><Share size={20} color="#ffffff" strokeWidth={1.25} className='cursor-pointer' /></button>
                       </div>
                       <div className='text-xl font-bold mb-2'>Title: {paste.title}</div>
                       <div>{paste.content}</div>
                       <div className='mt-2 pt-2 flex justify-end'>{paste.createdAt}</div>
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