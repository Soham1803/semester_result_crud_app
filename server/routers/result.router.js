const express = require('express');

const { getAllResults, getResultByRollNumber, getResultByPermanentRegistrationNumber, addStudentResult, updateStudentResult, deleteStudentResult } = require('../controllers/result.controller');

const resultRouter = express.Router();

resultRouter.get('/get-result', getAllResults);

resultRouter.get('/get-result-by-rollno/:rollNo', getResultByRollNumber);

resultRouter.get('/get-result-by-prn/:prn', getResultByPermanentRegistrationNumber);

resultRouter.post('/add-result', addStudentResult);

resultRouter.put('/update-result/:prn', updateStudentResult);

resultRouter.delete('/delete-result/:prn', deleteStudentResult);


module.exports = resultRouter;