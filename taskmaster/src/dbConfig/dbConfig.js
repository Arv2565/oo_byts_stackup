import mongoose from "mongoose";

export async function connectToDatabase() {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log('MongoDB connected');
        })
        connection.on('error', (err)=>{
            console.log('MongoDB error: '+err);
            process.exit(1);
        })
    } catch (error) {
        console.log('error: '+error)
        
    }
}