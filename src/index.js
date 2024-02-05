import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import connectDB from './db/index.js';
import { User } from './models/user.model.js' 

const app = express();
connectDB();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.get('/adduser', (req, res) => {
    const newUser = new User({
        name: 'Muhammad Rahim',
        email: 'rahim@gmail.com',
        password: 'Rahim@123',
    });

    newUser.save()
        .then((user) => {
            res.json({ message :'User Created Successfully'});
        })
        .catch((error) => {
            res.json(error );
        });
});

app.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(process.env.PORT , () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
})