const mongoose = require("mongoose")
const express = require("express")
const router = express.Router()
const EmployeeModel = require("../models/Employee.js")

router.get("/users" , async(req,res) => {
    const name = req.query.name
    const surname = req.query.surname

    if(name && surname){
        const data = await EmployeeModel.find({name:name , surname:surname})
        return res.status(200).json(data.length>0?data:"This employee is not exist")
    }else if(name || surname){
        return res.status(400).json({message:"Please write fullname of the employee"})
    }

    const data = await EmployeeModel.find({})
    res.status(200).json(data)
})

router.get("/users/:id" , async(req,res) => {
    const employeeId = req.params.id
    const data = await EmployeeModel.findOne({id:employeeId})
    res.status(200).json(data)
})

router.post("/users" , async(req,res) => {
    const {id,name,surname,age,gender,salary,position,startdate} = req.body

     try{
            const newEmployee = new EmployeeModel({id,name,surname,age,gender,salary,position,startdate})
            await newEmployee.save()
        res.status(200).json({message:"New employee succesfully created." , newEmployee})

     }catch(err){
            console.log(err);   
        res.status(404).json({message:"hopp"})
     }

     
})

router.put("/users" , async(req,res) => {
    const {id,name,surname,age,gender,salary,position,startdate} = req.body

    const updateEmployee = await EmployeeModel.updateOne({id:id},{$set:{name:name,surname:surname,age:age,gender:gender,salary:salary,position:position,startdate:startdate}})
        if(updateEmployee.matchedCount>0){
           return res.status(200).json({message:"The employee's informations succesfully updated."})
        }

    res.status(404).json({message:"This employee id is not exist"})
})

router.delete("/users" , async(req,res) => {
    const id = req.body.id
    
    const deleteEmployee = await EmployeeModel.deleteOne({id:id})
        if(deleteEmployee.deletedCount>0){
            return res.status(200).json({message:"The employee is succesfully deleted."})
        }
        
    res.status(404).json({message:"This employee id is not exist"})
    
    
})
module.exports = router