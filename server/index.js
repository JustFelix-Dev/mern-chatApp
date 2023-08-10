const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
require('dotenv').config()
const userRoutes = require('./routes/userRoute');
const chatRoutes = require('./routes/chatRoute');
const messageRoutes = require('./routes/messageRoute');

app.use(express.json());
app.use(cors());

const port = process.env.PORT;
const URL = process.env.MONGO_URL;

mongoose.connect(URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true
}).then((res)=>{
   app.listen(port,(req,res)=>{
    console.log(`--Connected to DB and Listening to :${port}`);
})
}).catch((err)=>{
    console.log(err.message)
})

// Routes
app.use('/api/users',userRoutes)
app.use('/api/chats',chatRoutes)
app.use('/api/messages',messageRoutes)
