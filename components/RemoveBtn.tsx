import { func } from "prop-types";
import '@/app/globals.css';
import React from 'react';
import Link from "next/link";
import {HiOutlineTrash} from "react-icons/hi";


const RemoveBtn: React.FC = () => {
  return (
    <button className="text-red-400" >
      <HiOutlineTrash size={24}/>
    </button>
  );
};

export default RemoveBtn;