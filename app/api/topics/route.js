import { connect } from "http2";
import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

// create POST methode

export async function POST(request){
  const{title,description}= await request.json();
  await connectMongoDB ();

  await Topic.create({title,description});
   return NextResponse.json({message:"Topic Created"},{status:201});

}

/*Create GET methode*/

export async function GET(request){
  await connectMongoDB ();

  const topics = await Topic.find();
   return NextResponse.json({topics});
}

//Create DELETE  methode
export async function DELETE(request){
  
const id=request.nextUrl.searchParams.get("id");  //send the id of the topic as a search parameter
await connectMongoDB();
  await Topic.findByIdAndDelete(id);                // 
  return NextResponse.json({message:"Topic deleted"},{status:200});
}

