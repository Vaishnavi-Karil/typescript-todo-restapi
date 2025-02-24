import express from 'express';
import cors from 'cors'; 
import morgan from 'morgan';
import routes from './routes'
import { connectToDatabase } from './config/db';
const app = express(); 
const port = 8000;
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
connectToDatabase();
app.use('/api', routes)

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})