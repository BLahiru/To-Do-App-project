

"use client";
import { func } from "prop-types";
import '@/app/globals.css';
import React from 'react';
import Link from "next/link";
import {HiOutlineTrash} from "react-icons/hi";
import {useRouter} from "next/navigation";


interface RemoveBtnProps {
  id: string; // or number, depending on the type of your id
}

const RemoveBtn: React.FC<RemoveBtnProps> = ({ id }) => {
  const router = useRouter();
  const removeTopic = async() => {
   const confirmed =confirm('Are you sure?');


   if(confirmed){
    const res =await fetch(`http://localhost:3000/api/topics?id=${id}`,{
      method: "DELETE",
    });
    if(res.ok){

      router.refresh();
    }
    
   }

  };

  return (
    <button onClick={removeTopic} className="text-red-400" >
      <HiOutlineTrash size={24}/>
    </button>
  );
};

export default RemoveBtn;