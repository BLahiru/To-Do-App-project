import { connect } from "http2";
import { title } from "process"
import connectMongoDB from "@/libs/Mongodb";
import Topic from "../../models/topic";
import { NextResponse } from "next/server";

export async function POST(request){
  const{title,description}= await request.json();
  await connectMongoDB ();

  await Topic.create({title,description});
   return NextResponse.json({message:"Topic Created"},{status:201});
   



}