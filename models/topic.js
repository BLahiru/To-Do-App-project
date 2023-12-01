import { timeStamp } from "console";
import mongoose,{Schema} from "mongoose";

//import { title } from "process";

const topicSchema = new Schema(
  {
    title:  {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

  },
  {
    timestamps:true,
  }
);

const Topic=  mongoose.models.Topic||mongoose.model("Topic",topicSchema);

export default Topic;

