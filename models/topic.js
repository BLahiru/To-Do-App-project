import { timeStamp } from "console";
import mongoose,{Schema} from "mongoose";
import { title } from "process";

const topicTitleSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },

  },
  {
    timeStamp:true,
  }
);

const Topic= mongoose.models.Topic || mongoose.model("Topic",topicTitleSchema);

export default Topic;