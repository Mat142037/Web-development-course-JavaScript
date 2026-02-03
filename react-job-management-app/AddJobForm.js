import { useState } from 'react';
import './JobForm.css'

export const AddJobForm = ({addNewJob}) => {

  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '') 
  
  return

      addNewJob(name);
      setName('');
  }

  return (
    <div className='form-header'>
        <form onSubmit={handleSubmit}>
            <input type='text' className='bot-input' value={name} placeholder='Enter the job' onChange={(e) => setName(e.target.value)} />
            <button type='submit' className='submit-data'>Add Job</button>  
        </form>
    </div>
  )
}
