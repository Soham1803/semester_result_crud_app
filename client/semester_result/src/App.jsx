import { useEffect, useState } from "react";
import axios from "axios";

import InputForm from "./InputForm";

function App() {

  const [allResults, setAllResults] = useState([]);

  const getAllResults = async () => { 
    try {
      const response = await axios.get("http://localhost:8000/result/get-result");
      setAllResults(response.data);
    }catch(err){  
      console.error(err);
    }
  }

  useEffect(() => {
    getAllResults();
  }, []);

  const [count, setCount] = useState(0);

  return (
    <div className="flex lg:flex-row md:flex-col w-screen h-screen">
      <div className="w-1/2 h-full flex items-center justify-center">
        <InputForm />
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">

        <div className="w-[95%] h-[95%] rounded-xl border-4 border-[#545454] p-4 flex flex-col items-center justify-evenly overflow-y-scroll">
         {
          allResults.map((result, index) => {
            return (
              <div key={index} className="flex flex-row items-center text-xs justify-evenly w-full h-[10%] rounded-md bg-[#444444]">
              <div className="flex flex-col items-start justify-evenly bg-[#545454] p-1">
                <div>Student Info</div>
                <div className="flex flex-row gap-3">
                  <div>Name:<br/> {result.studentName}</div>
                  <div>Roll No:<br/> {result.studentRollNo}</div>
                  <div>PRN:<br/> {result.studentPRN}</div>
                </div>
              </div>
            
              <div className="flex flex-col items-start justify-evenly bg-[#545454] p-1">
                <div>MSE marks</div>
                <div className="flex flex-row gap-3">
                  <div>DAA: {result.midsemResult.daa}</div>
                  <div>WT: {result.midsemResult.webTech}</div>
                  <div>CC: {result.midsemResult.cloudComputing}</div>
                  <div>SDAM: {result.midsemResult.sdam}</div>
                </div>
              </div>
  
              <div className="flex flex-col items-start justify-evenly bg-[#545454] p-1">
                <div>ESE marks</div>
                <div className="flex flex-row gap-3">
                  <div>DAA: {result.endSemResult.daa}</div>
                  <div>WT: {result.endSemResult.webTech}</div>
                  <div>CC: {result.endSemResult.cloudComputing}</div>
                  <div>SDAM: {result.endSemResult.sdam}</div>
                </div>
              </div>
  
            </div>
            )
         })}
          
        </div>
      </div>
    </div>
  );
}

export default App;
