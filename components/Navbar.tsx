import { func } from "prop-types";
import '@/app/globals.css';
import React from 'react';
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
     <Link className="text-white font-bolt" href={"/"}>To Do App</Link>
     <Link className="bg-white p-2 " href={"/addTopic"}>Add Topic</Link>
    </nav>
  );
};

export default Navbar;