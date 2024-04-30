const { getResults, getResultByRollNo, getResultByPRN, addResult, updateResultByPRN, deleteResultByPRN } = require('../models/result.model');

async function getAllResults(req, res){
    const results = await getResults();
    res.status(200).json(results);
    
}

async function getResultByRollNumber(req, res){
    const studentRollNo = req.params.rollNo;
    const result = await getResultByRollNo(studentRollNo);
    res.status(200).json(result);
}

async function getResultByPermanentRegistrationNumber(req, res){
    const studentPRN = req.params.prn;
    const result = await getResultByPRN(studentPRN);
    res.status(200).json(result);
}

async function addStudentResult(req, res){
    const { studentName, studentRollNo, studentPRN, midsemResult, endSemResult, finalResult } = req.body;
    await addResult(studentName, studentRollNo, studentPRN, midsemResult, endSemResult, finalResult);
    res.status(201).json({ message: 'Result added successfully' });
}

async function updateStudentResult(req, res){
    const studentPRN = req.params.prn;
    const { midsemResult, endSemResult, finalResult } = req.body;
    await updateResultByPRN(studentPRN, midsemResult, endSemResult, finalResult);
    res.status(202).json({ message: 'Result updated successfully' });
    
}

async function deleteStudentResult(req, res){
    const prn = req.params.prn;
    await deleteResultByPRN(prn);
    res.status(200).json({ message: 'Result deleted successfully' });
}

module.exports = {
    getAllResults,
    getResultByRollNumber,
    getResultByPermanentRegistrationNumber,
    addStudentResult,
    updateStudentResult,
    deleteStudentResult,
};