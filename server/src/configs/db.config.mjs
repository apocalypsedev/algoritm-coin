import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(
    process.env.MONGODB_URL,
    {
        useNewUrkParser: true,
        useUnifiedTopology: true,
    }
)
.then(() => console.log('Connected Successfully'))
.catch((err) => console.log(err));