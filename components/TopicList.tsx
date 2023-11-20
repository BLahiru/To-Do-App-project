import { func } from "prop-types";
import '@/app/globals.css';
import React from 'react';
import Link from "next/link";
import RemoveBtn from "@/components/RemoveBtn";
import {HiPencilAlt} from 'react-icons/hi';


const Home: React.FC = () => {
  return (
    <>
    <div className="p-4  my-3 flex justify-between gap-5 items-start border  border-gray-500 items-start">
      <div>
        <h2 className="font-bold text-2xl">Topic Title</h2>
        <div>Topic Description</div>
      </div>
      <div className="flex gap-2">
        <RemoveBtn></RemoveBtn>
        <Link href={'/editTopic/123'}> 
        <HiPencilAlt size={24}/>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Home;