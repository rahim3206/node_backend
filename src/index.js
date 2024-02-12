import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './db/index.js';
import { app } from './app.js';

dotenv.config({
    path: './.env'
})

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

connectDB()
.then(() => {
    app.listen(process.env.PORT || 1000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

