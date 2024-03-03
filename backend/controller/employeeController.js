const Employee = require('../model/employeeModel');

module.exports.submit = async(req,res)=>{
    try{

        const { 
            name, 
            email, 
            mobileNo, 
            designation, 
            gender, 
            courses, 
            imageData, 
            submissionDate
        } = req.body;

        const employee = new Employee({
            name,
            email,
            mobileNo,
            designation,
            gender,
            courses,
            imageData,
            submissionDate
        });

        await employee.save()

        res.status(201).json({message:"employee saved succesfully"})



    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server error'})
    }
};

module.exports.details = async (req, res) => {
    try {
        const employeeDetails = await Employee.find({});

        res.status(200).json(employeeDetails);
    } catch (error) {
        console.error("Error fetching employee details:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
module.exports.details