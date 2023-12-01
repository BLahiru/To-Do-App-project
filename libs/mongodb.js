import mongoose from "mongoose";

 const MONGODB_URI="mongodb+srv://LahiruBRathnayake:GnZYTlObtmbtKvA2@cluster0.xvwjw9m.mongodb.net/crud";



const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI,{
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
        //useCreateIndex:true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error.message);
  }
};

export default connectMongoDB;
