const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const adminRoute = require('./routes/adminRoute');
const employeeRoute = require('./routes/employeeRoute');
const removeEmployeeRoute = require('./routes/removeEmployeeRoutes');
const updateEmployeeRoute = require('./routes/updateEmployeeRoutes');
const cors = require('cors')

const app = express();
const port = 4000;

app.use(cors());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/Employee-Management",{
}).then(()=>{
    console.log("DB connection successful");
}).catch(err =>{
    console.log(err.message);
})

app.use('/auth',adminRoute);
app.use('/employee',employeeRoute)
app.use('/delete-employee',removeEmployeeRoute)
app.use('/update-employee',updateEmployeeRoute)

app.listen(port,()=>{
    console.log(`the server is running on port ${port}`);
})