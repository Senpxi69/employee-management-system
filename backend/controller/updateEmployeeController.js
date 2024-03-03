const Employee = require('../model/employeeModel');

module.exports.update = async (req, res) => {
    try {
        const { id } = req.body;

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

        // Find the employee by ID
        let employee = await Employee.findById(id);

        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        // Update the fields if provided
        if (name) employee.name = name;
        if (email) employee.email = email;
        if (mobileNo) employee.mobileNo = mobileNo;
        if (designation) employee.designation = designation;
        if (gender) employee.gender = gender;
        if (courses) employee.courses = courses;
        if (imageData) employee.imageData = imageData;
        if (submissionDate) employee.submissionDate = submissionDate;

        // Save the changes
        await employee.save();

        res.status(200).json({ message: "Employee updated successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
