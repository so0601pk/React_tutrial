import React, {useState} from "react";

const TextInput = () =>{
    const [name, setnName] = useState('')

    const handleName = (event) =>{
        setnName(event.target.value)
    }

    return(
        <input
        onChange={(event) => handleName(event)}
        type={'text'}
        value={name}
        />
    );
};

export default TextInput;