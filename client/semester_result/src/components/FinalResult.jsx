export default function FinalResult(props){
    return(
        <div className="flex flex-row gap-3 w-[30%] h-full items-center">
        <label className="text-lg w-[20%]" htmlFor={props.name}>{props.label}:</label>
        <input
          disabled= {props.disabled}
          required
          className="border-2 border-gray-400 rounded-md px-2 py-1 w-[80%]"
          type="text"
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          defaultValue={props.defaultValue}
          onChange={props.onChange}
        />
    </div>
    )
}