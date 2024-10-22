const mongoose = require("mongoose");

const positions = [
    'Bakery Manager',
    'Production Supervisor',
    'Baker',
    'Pastry Chef',
    'Quality Control Inspector',
    'Inventory Manager',
    'Sales Representative',
    'Delivery Driver',
    'Maintenance Technician'
];

const officialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    idNo: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    phoneNo: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    position: {
        type: String,
        required: true,
        enum: positions,  
        trim: true,
    },
}, { timestamps: true });


const Official = mongoose.model("Official", officialSchema);

module.exports = Official;
