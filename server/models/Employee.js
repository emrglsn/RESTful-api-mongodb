

const mongoose = require("mongoose")

const employeeSchema = mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    startdate:{
        type:Date,
        required:true
    }
},{ collection: 'employee' })

module.exports = mongoose.model("employee",employeeSchema)
