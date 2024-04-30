import Textbox from "./components/Textbox";
import FinalResult from "./components/FinalResult";
import { useState, useEffect } from "react";
import axios from "axios";

export default function InputForm(props){

    const [finalResult, setFinalResult] = useState(0);
    const [resultData, setResultData] = useState({
        studentName: "",
        studentRollNo: "",
        studentPRN: "",
 
            mse_daa: 0,
            mse_webTech: 0,
            mse_cloudComputing: 0,
            mse_sdam: 0,
        
            ese_daa: 0,
            ese_webTech: 0,
            ese_cloudComputing: 0,
            ese_sdam: 0,
        
            finalResult: finalResult
    });

    const postableResult = {
        studentName: resultData.studentName,
        studentRollNo: resultData.studentRollNo,
        studentPRN: resultData.studentPRN,
        midsemResult: {
            daa: resultData.mse_daa,
            webTech: resultData.mse_webTech,
            cloudComputing: resultData.mse_cloudComputing,
            sdam: resultData.mse_sdam
        },
        endSemResult: {
            daa: resultData.ese_daa,
            webTech: resultData.ese_webTech,
            cloudComputing: resultData.ese_cloudComputing,
            sdam: resultData.ese_sdam
        },
        finalResult: resultData.finalResult
    }

    const handleOnChange = (e) => {
        setResultData({
            ...resultData,
            [e.target.name]: e.target.value
        });

    }

    const postData = async () => {
        try {
            const response = await axios.post("http://localhost:8000/result/add-result", postableResult);
            if(response.status == 200){
                alert("Data added successfully");
                window.location.reload();
            }
        } catch (error) {
            console.error(error)
        }
    }

    const handleOnSubmit = (e) => { 
        console.log(resultData)
        e.preventDefault();
        postData();
    }




    return (
        <div className="w-[95%] h-[95%] rounded-xl border-4 border-[#545454]">
          <form className="flex w-full h-full flex-col items-center justify-evenly">
            <div className="w-full h-1/4 flex flex-col items-center justify-evenly p-2">
              <h4>Student Info:</h4>
              <Textbox
                onChange={handleOnChange}
                name={"studentName"}
                placeholder={"Your name..."}
                label={"Name"}
              />
              <Textbox
                onChange={handleOnChange}
                name={"studentRollNo"}
                placeholder={"Your Roll No..."}
                label={"Roll No"}
              />
              <Textbox
                onChange={handleOnChange}
                name={"studentPRN"}
                placeholder={"Your PRN..."}
                label={"PRN"}
              />
            </div>
            <div className="w-full h-1/3 flex flex-col items-center justify-evenly p-2">
              <h4>MSE Result:</h4>
              <Textbox
                onChange={handleOnChange}
                name={"mse_daa"}
                placeholder={"Your DAA marks..."}
                label={"DAA"}
              />
              <Textbox
                onChange={handleOnChange}
                name={"mse_webTech"}
                placeholder={"Your Web Technology marks..."}
                label={"Web Tech"}
              />
              <Textbox
                onChange={handleOnChange}
                name={"mse_cloudComputing"}
                placeholder={"Your Cloud Computing marks..."}
                label={"Cloud Comp"}
              />
              <Textbox
                onChange={handleOnChange}
                name={"mse_sdam"}
                placeholder={"Your SDAM marks..."}
                label={"SDAM"}
              />
            </div>
            <div className="w-full h-1/3 flex flex-col items-center justify-evenly p-2">
              <h4>ESE Result:</h4>
              <Textbox
                onChange={handleOnChange}
                name={"ese_daa"}
                placeholder={"Your DAA marks..."}
                label={"DAA"}
              />
              <Textbox
                onChange={handleOnChange}
                name={"ese_webTech"}
                placeholder={"Your Web Technology marks..."}
                label={"Web Tech"}
              />
              <Textbox
                onChange={handleOnChange}
                name={"ese_cloudComputing"}
                placeholder={"Your Cloud Computing marks..."}
                label={"Cloud Comp"}
              />
              <Textbox
                onChange={handleOnChange}
                name={"ese_sdam"}
                placeholder={"Your SDAM marks..."}
                label={"SDAM"}
              />
            </div>
            <div className="w-full h-1/8 flex items-center justify-evenly p-2">
              <FinalResult name={"total"} label={"Total"} disabled={true} defaultValue={finalResult} />
              <button
                className="bg-[#545454] text-white px-4 py-2 rounded-md"
                type="submit"
                onClick={handleOnSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
    )
}