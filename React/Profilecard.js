import './Profilecard.css';

const Profilecard = ({image, name, jobTitle, bio, skills}) => {
    return (
      <div className="profile">
        <img src={image} alt={name} className="profile-image"></img>
        <h3>{name}</h3>
        <h3>{jobTitle}</h3>
        <p>{bio}</p>

      <div className='skills'>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      </div>
    )
  }

  export default Profilecard;