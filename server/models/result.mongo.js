const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    studentName: String,
    studentRollNo: Number,
    studentPRN: Number,
    
    midsemResult: { // out of 30
        daa: Number,
        webTech: Number,
        cloudComputing: Number,
        sdam: Number,
    },

    endSemResult: { // out of 70
        daa: Number,
        webTech: Number,
        cloudComputing: Number,
        sdam: Number,
    },

    finalResult: Number,
});


const Result = mongoose.model('Result', resultSchema);

module.exports = Result;
