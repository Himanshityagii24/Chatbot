import {connect} from "mongoose";
import { disconnect } from "process";
export default async function connectToDatabase() {
    try{
        //await for a task
        await connect(process.env.MONGODB_URL);
    }catch(error){
     console.log(error);
     throw new Error("Cannot connect to MongoDB");
    }
}
//deletion of chat

async function disconnectFromDatabase(){
    try{
        await disconnect();
    }catch(error){
        console.log(error);
        throw new Error("Could not disconnect From Mongodb");
    }
}
export {connectToDatabase, disconnectFromDatabase};
