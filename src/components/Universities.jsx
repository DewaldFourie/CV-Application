/* eslint-disable react/prop-types */

import { useState } from "react";
import deleteIcon from '../assets/delete-icon.png'
import editIcon from '../assets/edit-icon.png'

function Universities({
    universities,
    setUniversities,
    deleteUniversity
}){

    const {
        universityName,
        studyField,
        uniStart,
        uniEnd
    } = universities

    const [minimized, setMinimized] = useState(false);

    const toggleMinimized = () => {
        setMinimized(!minimized);
    };

    const handleUniversityNameChange = (e) => {
        setUniversities({...universities, universityName: e.target.value})
    };

    const handleStudyFieldChange = (e) => {
        setUniversities({...universities, studyField: e.target.value})
    };

    const handleUniStartChange = (e) => {
        setUniversities({...universities, uniStart: e.target.value})
    };

    const handleUniEndChange = (e) => {
        setUniversities({...universities, uniEnd: e.target.value})
    };

    const componentLength = (component) => {
        return component.length > 0 ? " - " : ""
    }

    return (
        <div className={`input-box universities-input ${minimized ? 'minimized' : ''}`}>
            { minimized ? (
                <div className="minimized-view">
                    <div className="mini-value">{universityName} {componentLength(studyField)} {studyField}</div>
                    <div className="btn-container">
                        <img className="edit-btn" src={editIcon} alt="Edit" onClick={toggleMinimized} />
                        <img className="delete-btn" src={deleteIcon} alt="Delete" onClick={deleteUniversity}/>
                    </div>
                </div>
            ) : (
                <div>
                    <form className="universities-form">
                        <label>
                            University:
                            <input 
                                type="text" 
                                value={universityName}
                                onChange={handleUniversityNameChange}
                            />
                        </label>
                        <label>
                            Study Field:
                            <input 
                                type="text"
                                value={studyField}
                                onChange={handleStudyFieldChange} 
                            />
                        </label>
                        <div className="dates-input">
                            <label>
                                Start Date:
                                <input 
                                    type="text" 
                                    value={uniStart}
                                    onChange={handleUniStartChange}
                                />
                            </label>
                            <label>
                                End Date:
                                <input 
                                    type="text"
                                    value={uniEnd}
                                    onChange={handleUniEndChange}
                                />
                            </label>
                        </div>
                        <div className="form-buttons">
                            <div></div>
                            <button type="button" onClick={toggleMinimized}>Done</button>
                            <img className="delete-btn" src={deleteIcon} alt="Delete" onClick={deleteUniversity} />
                        </div>
                    </form>
                </div>
            )}

        </div>
    )

}


export default Universities;