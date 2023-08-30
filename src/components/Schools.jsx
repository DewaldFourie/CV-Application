/* eslint-disable react/prop-types */

import { useState } from "react";
import deleteIcon from '../assets/delete-icon.png'
import editIcon from '../assets/edit-icon.png'

function Schools({
    schools,
    setSchools,
    deleteSchool
}){

    const {
        schoolName,
        schoolStart,
        schoolEnd
    } = schools

    const [minimized, setMinimized] = useState(false);

    const toggleMinimized = () => {
        setMinimized(!minimized);
    };

    const handleSchoolNameChange = (e) => {
        setSchools({...schools, schoolName: e.target.value})
    };

    const handleSchoolStartChange = (e) => {
        setSchools({...schools, schoolStart: e.target.value})
    };

    const handleSchoolEndChange = (e) => {
        setSchools({...schools, schoolEnd: e.target.value})
    }

    return (
        <div className={`input-box schools-input ${minimized ? 'minimized' : ''}`}>
            { minimized ? (
                <div className="minimized-view">
                    <div className="mini-value">{schoolName}</div>
                    <div className="btn-container">
                        <img className="edit-btn" src={editIcon} alt="Edit" onClick={toggleMinimized} />
                        <img className="delete-btn" src={deleteIcon} alt="Delete" onClick={deleteSchool}/>
                    </div>
                </div>
            ) : (
                <div>
                    <form className="schools-form">
                        <label>
                            High School:
                            <input 
                                type="text"
                                value={schoolName}
                                onChange={handleSchoolNameChange} 
                            />
                        </label>
                        <div className="dates-input">
                            <label>
                                Start Date:
                                <input 
                                    type="text"
                                    value={schoolStart}
                                    onChange={handleSchoolStartChange} 
                                />
                            </label>
                            <label>
                                End Date:
                                <input 
                                    type="text" 
                                    value={schoolEnd}
                                    onChange={handleSchoolEndChange}
                                />
                            </label>
                        </div>
                        <div className="form-buttons">
                            <div></div>
                            <button type="button" onClick={toggleMinimized}>Done</button>
                            <img  className="delete-btn" src={deleteIcon} alt="Delete" onClick={deleteSchool} />
                        </div>
                    </form>
                </div>
            )}

        </div>
    )

}

export default Schools;