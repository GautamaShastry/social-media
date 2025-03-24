import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => {
    connectToMongo();
    console.log(`Server is running on port ${PORT}`);
});