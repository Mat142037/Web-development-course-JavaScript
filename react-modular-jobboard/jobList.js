import { JobItem } from './jobItem'
import { useState } from 'react';

export const JobList = () => {

    const [bots, setBots] = useState([
                { id: 1, name: "Email Extractor", status: "Running", task: "Extracting emails" },
                { id: 2, name: "Notification Sender", status: "Running", task: "Sending notifications" },
                { id: 3, name: "Data Analyzer", status: "Stopped", task: "Analyzing data" }
              ]);
            
            //New array for adding jobs to existing array
              const [newBot, setNewBots] = useState({id:"", name:"", status:"Stopped", task:""})
            
            //Array used to show/hide the job list
              const [show, setShow] = useState(true)
            
            //Styling for job status
              const statusRunningStyle = {color: "green", fontSize: "20px"};
              const statusStoppedStyle = {color: "red", fontSize: "20px"};
              
            //Changing the job status  
              const triggerJob = (id) => {
                setBots((prevBots) => 
                prevBots.map((bot) => 
                bot.id === id ? {...bot, status: bot.status === "Running" ? "Stopped" : "Running",} : bot))} 
            
            //Adding a job from the input fields
              const addNewBots = () => {
                if (newBot.id.trim() !== "" && newBot.name.trim() !== "" && newBot.task.trim() !== "") {
                    setBots([...bots, newBot])
                    setNewBots({id:"", name:"", task:""})
                }}
            
            //Deleting a job
            function removeJob(id) {
                setBots(bots.filter(bot=> id !== bot.id))
            }
            
    return (
                <div className="bot-list-manager">
                  <h1>Bot List Manager</h1>
                  <ul>
                    <button onClick={()=> setShow(!show)}>Click here</button>
                    {show && bots.map(bot => (<JobItem bot={bot} removeJob={removeJob} />))}
                </ul>
        </div>
      )
  
}
