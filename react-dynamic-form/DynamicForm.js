import React, { useState } from 'react';

const DynamicForm = () => {
  const [inputVal, setInputVal] = useState("")

  const handleInputChange = (event) => {
    setInputVal(event.target.value)
  };

  const handleReset = () => {
    setInputVal("")
  };

  const logInput = () => {
    console.log(inputVal)
  }

  const countCharacters = () => {
    if (inputVal.length < 5 || typeof inputVal !== "string") {
        return "Invalid message!"
    } else {
    return inputVal.length;
  }}

  const [items, setItems] = useState([]);

  const submitInput = () => {
    setItems([...items, inputVal]);
    setInputVal("");
  }

  return (
    <div>
      <h1>Dynamic Form</h1>
      <input
        type="text"
        value={inputVal}
        onChange={handleInputChange}
        placeholder="Type something..."
        minLength={5}
        
      />
      <button onClick={handleReset}>Reset</button>
      <button onClick={logInput}>Log Data</button>
      <button onClick={submitInput}>Submit Data</button>
      <div>
        <h2>Current Input:</h2>
        <p>{inputVal}</p>

        <h2>Character Count: {countCharacters()}</h2>

        <h3>Submitted Items:</h3>
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
      </div>
    </div>
  )}

export default DynamicForm;