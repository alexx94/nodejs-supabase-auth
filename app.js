import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoute from './src/routes/Auth.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Include routes here
app.use('/auth', authRoute);


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

export default app;
