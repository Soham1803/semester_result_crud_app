const Result = require("../models/result.mongo");

async function addResult(
    studentName,
    studentRollNo,
    studentPRN,
    midsemResult,
    endSemResult,
    finalResult
) {
    try {
        const newResult = new Result({
            studentName,
            studentRollNo,
            studentPRN,
            midsemResult,
            endSemResult,
            finalResult,
        });
        await newResult.save();
    } catch (error) {
        console.error(error);
    }
}

async function getResults() {
    try {
        return await Result.find();
    } catch (error) {
        console.error(error);
    }
}

async function getResultByRollNo(studentRollNo) {
    try {
        return await Result.find({ studentRollNo: studentRollNo });
    } catch (error) {
        console.error(error);
    }
}

async function getResultByPRN(studentPRN) {
    try {
        return await Result.findOne({ studentPRN });
    } catch (error) {
        console.error(error);
    }
}

async function updateResultByPRN(studentPRN, midsemResult, endSemResult, finalResult) {
    try {
        return await Result.findOneAndUpdate(
            {
                studentPRN: studentPRN,
            },
            {
                midsemResult,
                endSemResult,
                finalResult,
            }
        );
    } catch (error) {
        console.error(error);
    }
}

async function deleteResultByPRN(studentPRN) {
    try {
        if(!studentPRN) throw new Error('PRN is required');
        if(!Result.findOne({studentPRN: studentPRN})){
            console.error('No result found with this PRN');
        }
        return await Result.deleteOne({ studentPRN: studentPRN });
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
  addResult,
  getResults,
  getResultByRollNo,
  getResultByPRN,
  updateResultByPRN,
  deleteResultByPRN,
};
