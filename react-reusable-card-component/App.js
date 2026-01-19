import Profilecard from './Profilecard';
import './App.css';

function App() {
  const profiles = [
    {
      image: 'images/user1.png',
      name: 'Matthew Smith',
      jobTitle: 'Electrical & Controls Engineer',
      bio: '25 years experience at Kellanova',
      skills: ['18th Edition', 'Test & Inspecting', 'PLC programming']
    },
    {
      image: 'images/user2.png',
      name: 'Kirsty Holt',
      jobTitle: 'Veterinary Locum',
      bio: '10 years experience since graduating',
      skills: ['surgery', 'dental', 'end of life care']
    },
    {
      image: 'images/user3.png',
      name: 'Neal Hayes',
      jobTitle: 'Software developer',
      bio: 'Recently employed at AO',
      skills: ['python', 'c++', 'java']
    }
]

  return (
    <div className="app">
      <h1>Our Team Profiles</h1>
      <div className="card-container">
        {profiles.map((profiles, index) => (
          <Profilecard
          key={index}
          image={profiles.image}
          name={profiles.name}
          jobTitle={profiles.jobTitle}
          bio={profiles.bio}
          skills={profiles.skills}
          />
        ))}
      </div>
      
    </div>
  );
}



export default App;
