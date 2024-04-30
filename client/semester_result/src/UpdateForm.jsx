import Textbox from "./components/Textbox";
import FinalResult from "./components/FinalResult";

export default function InputForm(props){
    return (
        <div className="w-[95%] h-[95%] rounded-xl border-4 border-[#545454]">
          <form className="flex w-full h-full flex-col items-center justify-evenly">
            <div className="w-full h-1/4 flex flex-col items-center justify-evenly p-2">
              <h4>Student Info:</h4>
              <Textbox
                defaultValue={props.data.name}
                name={"student-name"}
                label={"Name"}
              />
              <Textbox
                defaultValue={props.data.rollno}
                name={"student-rollno"}
                label={"Roll No"}
              />
              <Textbox
                defaultValue={props.data.prn}              
                name={"student-prn"}
                label={"PRN"}
              />
            </div>
            <div className="w-full h-1/3 flex flex-col items-center justify-evenly p-2">
              <h4>MSE Result:</h4>
              <Textbox
                defaultValue={props.data.daa}
                name={"daa"}
                label={"DAA"}
              />
              <Textbox
                defaultValue={props.data.webTech}
                name={"web-tech"}
                label={"Web Tech"}
              />
              <Textbox
                defaultValue={props.data.cc}
                name={"cloud-comp"}
                label={"Cloud Comp"}
              />
              <Textbox
                defaultValue={props.data.sdam}
                name={"sdam"}
                label={"SDAM"}
              />
            </div>
            <div className="w-full h-1/3 flex flex-col items-center justify-evenly p-2">
              <h4>ESE Result:</h4>
              <Textbox
                defaultValue={props.data.daa}
                name={"daa"}
                label={"DAA"}
              />
              <Textbox
                defaultValue={props.data.webTech}
                name={"web-tech"}
                label={"Web Tech"}
              />
              <Textbox
                defaultValue={props.data.cc}
                name={"cloud-comp"}
                label={"Cloud Comp"}
              />
              <Textbox
                defaultValue={props.data.sdam}
                name={"sdam"}
                label={"SDAM"}
              />
            </div>
            <div className="w-full h-1/8 flex items-center justify-evenly p-2">
              <FinalResult name={"total"} label={"Total"} disabled={true} defaultValue={10} />
              <button
                className="bg-[#545454] text-white px-4 py-2 rounded-md"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
    )
}