/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react';
import './CVPreview.css'
import phoneIcon from '../assets/phone-icon.png' 
import emailIcon from '../assets/email-icon.png'
import locationIcon from '../assets/location-icon.png'

function CVPreview({ 
    firstName, 
    lastName, 
    phone, 
    email,
    loc,
    schools,
    universities,
    certificates,
    workExperiences,
}) {

    const [phoneValid, setPhoneValid] = useState(false)
    const [emailValid, setEmailValid] = useState(false)

    function checkInputLength(data, text) {
        let state = data.length > 0 ? true : false
        return state ? <span>{text} {data}</span> : null
    }

    function checkDateLength(data, text) {
        let state = data.length > 0 ? true : false
        return state ? <span>{text}</span> : null
    }

    function checkComponentLength(data, text) {
        let state = data.length > 0 ? true : false
        return state ? text : null
    }

    const handleValidPhone = () => {
        const contactRegex = /^[\d\s+\(\)]+$/;

        if (phone.length > 0 && contactRegex.test(phone)){
            setPhoneValid(true)
        } else {
            setPhoneValid(false)
        }
    }

    const handleValidEmail = () => {
        // Regular expression to validate email format
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        
        if (email.length > 0 && emailRegex.test(email)){
            setEmailValid(true)
        } else {
            setEmailValid(false)
        }
    };

    useEffect(() => {
        handleValidPhone();
        handleValidEmail();
    }, [phone, email]);


    return (
        <div className="cv-preview">
            <div className='general-info-output'>
                <h1>{firstName} {lastName}</h1>
                <div className='general-info-data'>
                    <p>{phoneValid ? <span><img className='general-info-icon' 
                        src={phoneIcon} alt="phone-icon"/> {phone}</span> : null} 
                    </p>
                    <p>{emailValid ? <span><img className='general-info-icon'
                        src={emailIcon} alt="email-icon" /> {email}</span> : null} </p>
                    <p>{checkInputLength(loc, <img className='general-info-icon' 
                        src={locationIcon} alt='location-icon'></img>)}
                    </p>
                </div>    
            </div>
            <h2 className='education-header sub-header'>{
                checkComponentLength(schools, "Education") || checkComponentLength(universities, "Education")
                }
            </h2>

            <div className='education-studies'>
                <div className='education-school'>
                    <h3 className='high-school-header'>{checkComponentLength(schools, "High School")}</h3>
                    {schools.map((school, index) => (
                        <div key={index} className='school-output'>
                            <div className='dates-output'>
                                <p className='dates-text'>{checkInputLength(school.schoolStart, "")}</p>
                                <p>{checkDateLength(school.schoolEnd, "-")}</p>
                                <p className='dates-text'>{checkInputLength(school.schoolEnd, "")}</p>
                            </div>
                            <div className='school-name'>
                                <p className='output-focus'>{checkInputLength(school.schoolName, "")}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='education-uni'>
                <h3 className='university-header'>{checkComponentLength(universities, "University")}</h3>
                    {universities.map((university, index) => (
                        <div key={index} className='uni-output'>
                            <div className='dates-output-uni'>
                                <p className='dates-text'>{checkInputLength(university.uniStart, "")}</p>
                                <p className='dates-text-hyp'>{checkDateLength(university.uniEnd, "-")}</p>
                                <p className='dates-text'>{checkInputLength(university.uniEnd, "")}</p>
                            </div>
                            <div className='university-data'>
                                <p className='uni-text output-focus'>{checkInputLength(university.universityName, "")}</p>
                                <p className='uni-text'>{checkInputLength(university.studyField, "")}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h2 className='certificate-header sub-header'>{checkComponentLength(certificates, 'Certificates')}</h2>
            <div className='education-certificates'>
                {certificates.map((cert, index) => (
                    <div key={index} className='certificate-output'>
                        <div className='certificate-output-data'> 
                            <p className='certificate-text output-focus'>{checkInputLength(cert.cerName, "")}</p>
                            <p className='certificate-text'>{checkInputLength(cert.cerIns, "")}</p>
                            <p className='certificate-text'>{checkInputLength(cert.date, "")}</p>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className='work-experience-header sub-header'>{checkComponentLength(workExperiences, "Work Experience")}</h2>
            <div className='work-experience-output'>
                {workExperiences.map((workExp, index) => (
                    <div key={index} className='work-output'>
                        <div className='dates-output'>
                            <p className='dates-text'>{checkInputLength(workExp.workStart, "")}</p>
                            <p className='dates-text-hyp'>{checkDateLength(workExp.workEnd, "-")}</p>
                            <p className='dates-text'>{checkInputLength(workExp.workEnd, "")}</p>
                        </div>
                        <div className='work-experience-data'>
                            <p className='uni-text output-focus'>{checkInputLength(workExp.company, "")}</p>
                            <p className='uni-text'>{checkInputLength(workExp.title, "")}</p>
                        </div>
                        <div className='work-description-data'>
                            <p className='uni-text'>{checkInputLength(workExp.workDes, "")}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CVPreview;