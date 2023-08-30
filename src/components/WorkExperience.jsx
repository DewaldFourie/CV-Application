/* eslint-disable react/prop-types */

import { useState } from "react";
import deleteIcon from '../assets/delete-icon.png'
import editIcon from '../assets/edit-icon.png'

function WorkExperience({
    workExperience, 
    setWorkExperience,
    deleteWorkExperience
}){
    
    const {
        company,
        title,
        workStart,
        workEnd, 
        workDes
    } = workExperience;

    const [minimized, setMinimized] = useState(false);

    const toggleMinimized = () => {
        setMinimized(!minimized);
    };

    const handleCompanyChange = (e) => {
        setWorkExperience({...workExperience, company: e.target.value})
    };
    
    const handleTitleChange = (e) => {
        setWorkExperience({ ...workExperience, title: e.target.value });
    };
    
    const handleWorkStartChange = (e) => {
        setWorkExperience({ ...workExperience, workStart: e.target.value });
    }; 

    const handleWorkEndChange = (e) => {
        setWorkExperience({ ...workExperience, workEnd: e.target.value });
    };

    const handleWorkDesChange = (e) => {
        setWorkExperience({ ...workExperience, workDes: e.target.value})
    }
    
    return (
        <div className={`input-box work-experience-input ${minimized ? 'minimized' : ''}`}>
            { minimized ? (
                <div className='minimized-view'>
                    <div className='mini-value'>{company}</div>
                    <div className="btn-container"> 
                        <img className="edit-btn" src={editIcon} alt="Edit" onClick={toggleMinimized} />
                        <img className="delete-btn" src={deleteIcon} alt="Delete" onClick={deleteWorkExperience}/>
                    </div>
                </div>
            ) : (
            <div>
                <form className='work-experience-form'>
                    <label >
                        Company:
                        <input 
                            type="text"
                            value={company}
                            onChange={handleCompanyChange} 
                        />
                    </label>
                    <label >
                        Job Title:
                        <input 
                            type="text"
                            value={title}
                            onChange={handleTitleChange} 
                        />
                    </label>
                    <label >
                        Job Description:
                        <textArea 
                            className="text-area"
                            type="text" 
                            placeholder="Describe Job details"
                            value={workDes}
                            onChange={handleWorkDesChange}
                        />
                    </label>
                    <div className='dates-input'>
                        <label >
                            From:
                            <input 
                                type="text"
                                value={workStart}
                                onChange={handleWorkStartChange} 
                            />
                        </label>
                        <label >
                            To:
                            <input 
                                type="text"
                                value={workEnd}
                                onChange={handleWorkEndChange} 
                            />
                        </label>
                    </div>
                    <div className='form-buttons'>
                        <div></div>
                        <button type='button' onClick={toggleMinimized}>Done</button>
                        <img className="delete-btn" src={deleteIcon} alt="Delete" onClick={deleteWorkExperience} />
                    </div>
                </form>
            </div>    
            )}
        </div>
    )

}

export default WorkExperience;