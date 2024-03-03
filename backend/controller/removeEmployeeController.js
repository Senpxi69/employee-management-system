const Employee = require('../model/employeeModel');

module.exports.remove = async (req, res) => {
    try {
        const { id } = req.body;

        // Check if the ID is provided
        if (!id) {
            return res.status(400).json({ message: "Employee ID is required" });
        }

        // Check if the user exists
        const employee = await Employee.findById(id);
        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        // Remove the employee
        await Employee.findByIdAndDelete(id);

        res.status(200).json({ message: "Employee removed successfully" });
    } catch (error) {
        console.error("Error removing employee:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
