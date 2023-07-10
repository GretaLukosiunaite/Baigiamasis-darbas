import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDatabase = async (startServer: () => void) => {
  try {
    if (process.env.MONGODB_URI) {
      const connected = await mongoose.connect(process.env.MONGODB_URI);

      if (connected) {
        console.log("Connetced to MongoDB");

        startServer();
      }
    } else {
      throw new Error("Failed to connect to MongoDB");
    }
  } catch (error) {
    console.log("Error while connecting to MongoDB:", error);

    process.exit(1);
  }
};

export default connectDatabase;

// name import: import {connectDatabase} from "../path" (any amount name exports per page)
// default import: import connectDatabase from "../path" (only one default export per page)
