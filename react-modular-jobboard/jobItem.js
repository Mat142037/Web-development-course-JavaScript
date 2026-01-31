import React from 'react'


export const JobItem = ({bot,removeJob}) => {
  
       return (
    <div>
        <li><strong>Bot ID</strong>: {bot.id} <br/> <strong>Bot Name:</strong> {bot.name} <br/> <strong>Bot Status:</strong> {bot.status}
        <br/> <strong>Bot Task:</strong> {bot.task} <br/>
        <button onClick={() => removeJob(bot.id)}>Remove Job</button><br/></li>
    </div>
  )
}
