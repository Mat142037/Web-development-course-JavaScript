

 const JobBoard = () => {
  const companyName = "Kellanova Company LTD";
  const jobCount = 6; 
  const expJobCount = jobCount*1.5

    // Ternary opereator for true or false outcome
    /*const getJobMessage = () => {
        return jobCount === 0 ? "No jobs to schedule today" : `Jobs running today from bot: ${jobCount}`
    }*/

    const getJobMessage = () => {
        if (jobCount === 0) {
            return "No jobs to schedule today";
        } else if (jobCount >= 1 && jobCount <= 5) {
            return `Low amount of jobs running today from bot: ${jobCount}`;
        } else {
            return `High amount of jobs running today from bot: ${jobCount}`;
        }
    }

 return (
  <div>
   <h1>{companyName}</h1>
   <p>{getJobMessage()}</p>
   <p>Estimated jobs for next week: {expJobCount}</p>
  </div>
 );
}

export default JobBoard;