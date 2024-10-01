import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        //const connectionString = process.env.MONGODB_URI;
        //if (!process.env.MONGODB_URI) return console.log("No MongoDB URI Found");

        const connectionString = "mongodb+srv://aysha:hXgq1Zb6ECX3SvIX@cluster0.ubhis.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
        await mongoose.connect(connectionString);
        console.log("Connected to DB");
        
    } catch (error) {
        console.log("Error connecting to DB",error);
    }
}

export { connectDB };