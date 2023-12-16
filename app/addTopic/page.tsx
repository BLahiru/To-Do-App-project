
"use client";
import { func } from "prop-types";
import '@/app/globals.css';
import Link from "next/link";
import React,{useState} from 'react';
import { useRouter } from "next/navigation";


const AddTopic: React.FC =() => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();
  
  const handleSubmit=async(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    if (!title|| !description){
      alert('title and description are required');
      return;
    }
    try{
      const res= await fetch("http://localhost:3000/api/topics",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify({title,description})
      });
      
      if(res.ok){
        router.push('/');
      }else{
        throw new Error("failed to create a topic");
      }

    }catch(error){}

  };

  return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input 
          onChange={(e )=>setTitle(e.target.value)}
          value={title}

        className="border border-slate-500" 
        type="text" 
        placeholder="Topic Title"
        />

        <input 
         onChange={(e)=>setDescription(e.target.value)}
         value={description}
        className="border border-slate-500"
         type="text" 
         placeholder="Topic Description"
         />



        <button 
        type="submit"
        className="bg-green-600 font-bolt text=white py-3 px-6 w-fit">Add Button</button>

      </form>


  );
};

export default AddTopic;