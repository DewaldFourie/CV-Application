
import { useState } from 'react';
import './App.css'
import GeneralInfo from './components/GeneralInfo';
import CVPreview from './components/CVPreview';
import Schools from './components/Schools';
import Certificates from './components/Certificates';
import WorkExperience from './components/WorkExperience';
import Universities from './components/Universities';
import clearIcon from './assets/clear-input.png'


function App() {
  // set state variables of GeneralInfo component
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [loc, setLoc] = useState('');
  // set state variables of Schools component
  const [schools, setSchools] = useState([])
  // set state variables of Universities component
  const [universities, setUniversities] = useState([])
// set state variables of Certificates
  const [certificates, setCertificates] = useState([])
  // set state variables of WorkExperience Component
  const [workExperiences, setWorkExperiences] = useState([])
  
  const addSchools = () => {
    setSchools([...schools, {
      schoolName: '',
      schoolStart: '',
      schoolEnd: ''
    }])
  }

  const addUniversities = () => {
    setUniversities([...universities, {
      universityName: '',
      studyField: '',
      uniStart: '',
      uniEnd: ''
    }])
  }

  const addCertificate = () => {
    setCertificates([...certificates, {
      cerName: '',
      cerIns: '',
      date: ''
    }]);
  }

  const addWorkExperience = () => {
    setWorkExperiences([...workExperiences, {
      company: '',
      title: '',
      workStart: '',
      workEnd: '',
      workDes: ''
    }]);
  }

  const deleteElement = (element, setElement, indexToDelete) => {
    const updatedElements = element.filter((_, index) => index !== indexToDelete);
    setElement(updatedElements)
  }

  // Reset all the input values to their original state
  const resetValues = () => {

    setFirstName('');
    setLastName('');
    setPhone('');
    setEmail('');
    setLoc('');
    setSchools([]);
    setUniversities([]);
    setCertificates([]);
    setWorkExperiences([]);
  } 

  const loadExample = () => {

    setFirstName('John');
    setLastName('Doe');
    setPhone('(+123) 456 7890')
    setEmail('johndoe@example.com')
    setLoc('New York, USA')
    setSchools([
      {
        schoolName: "NY Boys High",
        schoolStart: "2010",
        schoolEnd: "2014"
      }
    ]);
    setUniversities([
      {
        universityName: "Cambridge",
        studyField: "BSc Computer Science",
        uniStart: "2015",
        uniEnd: "2019"
      }
    ]);
    setCertificates([
      {
        cerName: "Risk Management",
        cerIns: "AP College",
        date: "2020"
      }
    ]);
    setWorkExperiences([
      {
        company: "DataFin Solutions",
        title: "Junior Software Developer",
        workStart: "2020",
        workEnd: "2023",
        workDes: `
          Acting as a junior Web Developer and Layout Designer. Some of the technical aspects
          include vanilla JavaScript, HTML and CSS. Setting up web developments using React 
          and Node.js. Using back-end techniques such as SQL with MongoDB. Maintaining the
          structure and enhancing the performance. 
        `
      }
    ])
  }

  return (
    <>
      <div className="input-side">
        <div className='reset-load'>
          <button className='reset-btn' onClick={resetValues}><img src={clearIcon} alt="" className='clear-icon'/> Clear CV</button>
          <button className='example-btn' onClick={loadExample}>Load Example</button>
        </div>
        <div className='input-component'>
          <h2 className="form-heading">General Information</h2>
          <GeneralInfo
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
            loc={loc}
            setLoc={setLoc}
          />
        </div>
        <div className='input-component'>
          <h2 className='form-heading'>Education</h2>
          <div className='form-component'>
            {schools.map((school, index) => (
              <Schools
                key={index}
                index={index}
                schools={school}
                setSchools={(updatedSchool) => {
                  const updatedSchools = [...schools];
                  updatedSchools[index] = updatedSchool;
                  setSchools(updatedSchools);
                }}
                deleteSchool={() => deleteElement(schools, setSchools, index)}
              />  
            ))}
          </div>
          <button className='add-btn' onClick={addSchools}>Add School</button>
          <div className='form-component'>
            {universities.map((university, index) => (
              <Universities
                key={index}
                index={index}
                universities={university}
                setUniversities={(updatedUniversity) => {
                  const updatedUniversities = [...universities];
                  updatedUniversities[index] = updatedUniversity;
                  setUniversities(updatedUniversities);
                }}
                deleteUniversity={() => deleteElement(universities, setUniversities, index)}
              />
            ))}
          </div>
          <button className='add-btn' onClick={addUniversities}>Add University</button>
          
        </div>
        <div className='input-component'>
          <h2 className="form-heading">Certificates</h2>
          <div className='form-component'>
            {certificates.map((cert, index) => (
              <Certificates
                key={index}
                index={index}
                certificates={cert}
                setCertificates={(updatedCert) => {
                  const updatedCertificates = [...certificates];
                  updatedCertificates[index] = updatedCert;
                  setCertificates(updatedCertificates);
                }}
                deleteCertificate={() => deleteElement(certificates, setCertificates, index)}
              />
            ))}
          </div>
          <button className='add-btn' onClick={addCertificate}>Add Certificate</button>
        </div>
        <div className='input-component'>
          <h2 className='form-heading'>Work Experience</h2>
          <div className='form-component'>
            {workExperiences.map((workExp, index) => (
              <WorkExperience
                key={index}
                index={index}
                workExperience={workExp}
                setWorkExperience={(updatedWorkExp) => {
                  const updatedExperiences = [...workExperiences];
                  updatedExperiences[index] = updatedWorkExp;
                  setWorkExperiences(updatedExperiences);
                }}
                deleteWorkExperience={() => deleteElement(workExperiences, setWorkExperiences, index)}
              />
            ))}
          </div>
          <button className='add-btn' onClick={addWorkExperience}>Add Work Experience</button>
        </div>
      </div>
      <CVPreview
        firstName={firstName}
        lastName={lastName}
        phone={phone}
        email={email}
        loc={loc}
        schools={schools}
        universities={universities}
        certificates={certificates}
        workExperiences={workExperiences}
      />
    </>
  );
}

export default App
