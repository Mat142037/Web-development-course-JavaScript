import '../src/Components/JobColumn.css'
import './App.css';
import { Header } from './Components/header';
import { Footer } from './Components/footer';
import { JobColumn } from './Components/JobColumn';
import InProgress from '../src/Images/inprogress.jpg'
import CompletedImage from '../src/Images/completedImage.jpg'
import NeedToStart from '../src/Images/needtostart.png'
import { useState } from 'react';
import { AddJobForm } from './Components/AddJobForm';



export function App() {

   const [jobList, setJobList] = useState ([
      {id:'1', name:'Implement new software', status:'Completed'},
      {id:'2', name:'Debug software', status:'Pending'},
      {id:'3', name:'Load new programs', status:'Start'},
      {id:'4', name:'Parse emails', status:'Pending'},
      {id:'5', name:'SAP extraction', status:'Start'},
      {id:'6', name:'Generate report', status:'Pending'},
      {id:'7', name:'Execute commands', status:'Start'}
   ])

   const deleteJob = (id) => {
      setJobList(jobList.filter(job => id !== job.id))
   }

   const updateJobStatus = (id, newStatus) => {
      setJobList((prevjobList) => 
      prevjobList.map((job) => 
         job.id === id ? {...job, status: newStatus} : job
      ))
   }


   const addNewJob = (name) => {
      const newJob = {id:(Math.random), name, status: 'Start'};
      setJobList((prevjobList) => [...prevjobList, newJob])
   }



   return ( <div>
      <Header />
      <AddJobForm addNewJob={addNewJob} />
         <main className='job-column'>
            <JobColumn title='In progress' image={InProgress} alt='In progress' content='Jobs currently in progress'
            jobList={jobList.filter((job) => job.status === 'Pending')} deleteJob={deleteJob} updateJobStatus={updateJobStatus} />
            <JobColumn title='Completed' image={CompletedImage} alt='Completed' content='Jobs have been sucssesfully completed' 
            jobList={jobList.filter((job) => job.status === 'Completed')} deleteJob={deleteJob} updateJobStatus={updateJobStatus} />
            <JobColumn title='Need to start' image={NeedToStart} alt='Need to start' content='Jobs have yet to be started' 
            jobList={jobList.filter((job) => job.status === 'Start')} deleteJob={deleteJob} updateJobStatus={updateJobStatus} />
         </main>
      <Footer />
      </div> )
}
  
export default App;
  
