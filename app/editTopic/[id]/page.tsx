import { func } from "prop-types";
import '@/app/globals.css';
import React from 'react';
import Link from "next/link";
import EditTopicForm from "@/components/editTopicForm";

const editTopic: React.FC = () => {
  return (
      <>
      <EditTopicForm></EditTopicForm>
      
      </>
      

  );
};

export default editTopic;