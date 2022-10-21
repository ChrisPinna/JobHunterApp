import express from "express"
import cors from "cors"
import "dotenv/config"
import helmet from "helmet"

import jobHuntRoutes from './routes/jobHuntRoutes.js'
import userRoutes from './routes/userRoutes.js'


const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());

app.use('/api/jobhunts', jobHuntRoutes);
app.use('/api/users', userRoutes);

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`Listening to port ${port}...`);
});