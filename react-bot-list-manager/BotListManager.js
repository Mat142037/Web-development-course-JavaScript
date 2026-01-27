import React, { useState } from 'react';
import './BotListManager.css';

const BotListManager = () => {
    const [newBot, setNewBots] = useState({id:"", name:"", status:"Stopped", task:""})
    
    const [bots, setBots] = useState([
    { id: 1, name: "Email Extractor", status: "Running", task: "Extracting emails" },
    { id: 2, name: "Notification Sender", status: "Running", task: "Sending notifications" },
    { id: 3, name: "Data Analyzer", status: "Stopped", task: "Analyzing data" }
  ]);

  const statusRunningStyle = {color: "green", fontSize: "20px"};
  const statusStoppedStyle = {color: "red", fontSize: "20px"};
  
  const triggerJob = (id) => {
    setBots((prevBots) => 
    prevBots.map((bot) => 
    bot.id === id ? {...bot, status: bot.status === "Running" ? "Stopped" : "Running",} : bot))} 

const addNewBots = () => {
    if (newBot.id.trim() !== "" && newBot.name.trim() !== "" && newBot.task.trim() !== "") {
        setBots([...bots, newBot])
        setNewBots({id:"", name:"", task:""})
    }
}

function removeJob(id) {
    setBots(bots.filter(bot=> id !== bot.id))
}

  return (
    <div className="bot-list-manager">
      <h1>Bot List Manager</h1>
      <ul>
        {bots.map(bot => <li key={bot.id}><strong>Bot ID</strong>: {bot.id} <br/> <strong>Bot Name:</strong> {bot.name} <br/> 
        <strong>Bot Status:</strong> <span style = {bot.status === "Running" ? statusRunningStyle : statusStoppedStyle}> {bot.status}</span> 
        <br/> <strong>Bot Task:</strong> {bot.task} <br/> <button onClick={() => triggerJob(bot.id)}>Trigger Job</button>
        <button onClick={() => removeJob(bot.id)}>Remove Job</button><br/></li>)}
      </ul>
      <div className='input-field'>
        <input type="text" value={newBot.id} onChange={(e)=> setNewBots({...newBot, id:e.target.value})} placeholder='Enter ID'/>
        <input type="text" value={newBot.name} onChange={(e)=> setNewBots({...newBot, name:e.target.value})} placeholder='Enter name'/>
        <input type="text" value={newBot.task} onChange={(e)=> setNewBots({...newBot, task:e.target.value})} placeholder='Enter task'/>
        <button onClick={addNewBots}>Add New Job</button><br/><br/>
      </div>
    </div>
  );
};

export default BotListManager;