import mongoose from 'mongoose';

const startDb=async()=>{
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("connected to database",process.env.DATABASE_URL);
}
export default startDb;