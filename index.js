const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv") //usamos la librería
dotenv.config() //tomas todas las variables y las carga en process.env -> es un objeto bastante grande
const PORT = process.env.PORT
const password = process.env.PASSWORD_BD
const url = `mongodb+srv://javisimon22:${password}@data-base.shzhzce.mongodb.net/`

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const connectToMongo = async() =>{
  try{

    await mongoose.connect(url)
    app.listen(PORT, () => console.log(`BD conectada, escuchando en puerto http://localhost:${PORT}`))

  }catch(error){
    console.log(error);
  }

}

connectToMongo()
