import {useState} from 'react';

const JobCounter = () => {
  let [jobCount, counter] = useState(0); //jobCount is the current state variable, counter is a function to update the state

  const handleAddJob = () => {
    counter(jobCount + 1);
    console.log(jobCount);
  }

  return (
    <div>
      <h1>Job Counter</h1>
      <p>Current Jobs: {jobCount}</p>
      <button onClick={handleAddJob}>Add Job</button>
    </div>
  );
};

export default JobCounter;