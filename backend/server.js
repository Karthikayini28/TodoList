const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // or specify the exact origin
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.json());

mongoose.connect("mongodb+srv://karthisrwiselearnz:Kkam@2803@cluster0.vak6v.mongodb.net/Todo?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(`MongoDB connection error: ${err.message}`));

app.use('/todos', todoRoutes);

app.get('/',(req,res)=>{
  res.send("Welcome WiseLearnz")
})
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
