import { func } from "prop-types";
import '@/app/globals.css';
import Link from "next/link";
//import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import EditTopicForm from "@/components/editTopicForm";


interface EditTopicFormProps {
  id: string;
  title: string;
  description: string;
}



const getTopicById = async (id:any) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params} :any) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}