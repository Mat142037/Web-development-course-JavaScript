import React, { useState } from 'react';

const buttonStyle = {margin: "5px", padding:"5px"}
const AdvancedJobCounter = () => {
  let [jobCount, count] = useState(0);

  const handleAddJob = () => {
    count(jobCount + 1);
  };

  const handleRemoveJob = () => {
    if (jobCount > 0) {
        count(jobCount - 1);
    }};

  const handleResetJobs = () => {
    count(0);
  };

  const jobMessage = () => {
  if (jobCount === 0) {
    return "No Jobs Avaliable";
  } else if (jobCount > 0 && jobCount < 6) {
    return "Few Jobs Avaliable";
  } else {
    return "Many Jobs Avaliable";
  }
}

  return (
    <div>
      <h1>Advanced Job Counter</h1>
      
      <p>{jobMessage()}</p>
      <p>Current Jobs: {jobCount}</p>
      
      <button style={buttonStyle} onClick={handleAddJob} value="Add job">Add job</button>
      <button style={buttonStyle} onClick={handleRemoveJob} value="Remove job">Remove job</button>
      <button style={buttonStyle} onClick={handleResetJobs} value="Reset job count">Reset job count</button>
    </div>
  );
};

export default AdvancedJobCounter;