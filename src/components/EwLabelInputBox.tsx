

const EwLabelInputBox = (props: any) => {
    const {labelVal, inputName, inputVal, handleChange, inputType = "text", required = false, min = 0} = props;

    return (
        <label className="ew-label">
            <span className="ew-label-text">
                {labelVal}{required && <span style={{color: "red"}}>*</span> }
            </span>
            <input className="ew-input-text" 
                type={inputType} 
                name={inputName} 
                value={inputVal || ""} 
                onChange={handleChange} 
                required={required} 
                min={min}
            />
        </label>
    );
}

export {
    EwLabelInputBox
}