import { func } from "prop-types";
import '@/app/globals.css';
import React from 'react';
import Link from "next/link";

const EditTopicForm: React.FC = () => {
  return (
    <form className="flex flex-col gap-3">
    <input className="border border-slate-500" type="text" placeholder="Topic Title"/>
    <input className="border border-slate-500" type="text" placeholder="Topic Discription"/>

    <button className="bg-green-600 font-bolt text=white py-3 px-6 w-fit">Update Topic</button>

  </form>


  );
};

export default EditTopicForm;