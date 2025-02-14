import express from 'express';
import bodyParser from 'body-parser'; 
import { config } from 'dotenv'; 
import adminRoutes from './routes/adminRoutes'
import connectDB from './config/db';



config();
const app = express();
app.use(bodyParser.json()); 

app.use('/api/admin',adminRoutes);

connectDB();

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});