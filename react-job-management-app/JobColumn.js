import './JobColumn.css'
import Delete from '../Images/delete.png'
import { JobStatus } from './JobStatus'

export const JobColumn = ({title, image, alt, status, content, jobList, deleteJob, updateJobStatus }) => {
  return (
    <div className='job-column-item'>
      <h2 className="heading-status">{title}</h2>
      <img src={image} alt={alt} className="status-image" />
      <p className='content-paragragh'>{content}</p>
      <div className='job-list-box'>
        {jobList.length === 0 ? (<p>No jobs with this status</p>)
        : (jobList.map((job) => (
        <ul className='job-list'>
            <li key={job.id} className='job-card'>{job.name}
                <select value={job.status} onChange={(e) => updateJobStatus(job.id, e.target.value)}>
                    <option value='Start'>Start</option>
                    <option value='Pending'>Pending</option>
                    <option value='Completed'>Completed</option>
                </select>
                <img src={Delete} alt='Delete' className='delete-icon' onClick={() => deleteJob(job.id)}/></li></ul>)))}
      </div>
      <div className='job-box'>
        <div className='status-select'>
            <JobStatus value='Change Status'/>
        </div>
        <div className='delete-select'>
            
        </div>
      </div>
      
    </div>
  )
}
