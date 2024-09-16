const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors(
  {
    origin:["https://todo-list-frontend-f3ahw5usg-karthikayinis-projects.vercel.app/"],
    methods:["GET","POST","PATCH","DELETE"],
    credentials:true
  }
));
app.use(express.json());

mongoose.connect("mongodb+srv://karthisrwiselearnz:Kkam@2803@cluster0.vak6v.mongodb.net/Todo?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(`MongoDB connection error: ${err.message}`));

app.use('/todos', todoRoutes);

app.get('/',(req,res)=>{
  res.send("Welcome WiseLearnz")
})
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
