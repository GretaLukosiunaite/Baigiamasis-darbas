var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDatabase = (startServer) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (process.env.MONGODB_URI) {
            const connected = yield mongoose.connect(process.env.MONGODB_URI);
            if (connected) {
                console.log("Connetced to MongoDB");
                startServer();
            }
        }
        else {
            throw new Error("Failed to connect to MongoDB");
        }
    }
    catch (error) {
        console.log("Error while connecting to MongoDB:", error);
        process.exit(1);
    }
});
export default connectDatabase;
// name import: import {connectDatabase} from "../path" (any amount name exports per page)
// default import: import connectDatabase from "../path" (only one default export per page)
