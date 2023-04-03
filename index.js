const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');

dotenv.config();
require('./config/db');

const userRoutes=require('./routes/userRoutes');
const favcoinRoutes=require('./routes/favouritecoin');

const app=express();

const PORT=process.env.PORT || 7000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.use('/users',userRoutes);
app.use('/favcoin',favcoinRoutes);

app.listen(8080,()=>{
    console.log(`Server is running on port ${PORT}`);
});