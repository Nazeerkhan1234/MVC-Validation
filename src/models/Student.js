//Import Area
const {mongoose} = require('../config/db');
let studentSchema = { 
    name: String,
    surname: String 
};
const Student = mongoose.model('Student', studentSchema);
exports.Student = Student;