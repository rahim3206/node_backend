    import dotenv from 'dotenv'
    import express from 'express'
    import cors from 'cors'
    import connectDB from './db/index.js';
    const app = express();
    dotenv.config({
        path: './.env'
    })

    app.use(cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }))

    connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    })

