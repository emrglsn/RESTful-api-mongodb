const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const EmployeeRouter = require("./routes/Employee.js")

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/v1",EmployeeRouter)

mongoose.connect("mongodb+srv://................@cluster0.i9btiet.mongodb.net/mongodbrest?retryWrites=true&w=majority")

app.listen( 3000 , ()=>{
    console.log("server running on 3000");
})
