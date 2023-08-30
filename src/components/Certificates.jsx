/* eslint-disable react/prop-types */

import { useState } from "react";
import deleteIcon from '../assets/delete-icon.png'
import editIcon from '../assets/edit-icon.png'

function Certificates({
    certificates,
    setCertificates,
    deleteCertificate
}){

    const {
        cerName,
        cerIns,
        date
    } = certificates

    const [minimized, setMinimized] = useState(false);

    const toggleMinimized = () => {
        setMinimized(!minimized);
    };

    const handleCerNameChange = (e) => {
        setCertificates({...certificates, cerName: e.target.value})
    };

    const handleCerInsChange = (e) => {
        setCertificates({...certificates, cerIns: e.target.value})
    };

    const handleDateChange = (e) => {
        setCertificates({...certificates, date: e.target.value})
    };
    

    return (
        <div className={`input-box certificates-input ${minimized ? 'minimized' : ''}`}>
            { minimized ? (
                <div className="minimized-view">
                    <div className="mini-value">{cerName}</div>
                    <div className="btn-container" >
                        <img className="edit-btn" src={editIcon} alt="Edit" onClick={toggleMinimized} />
                        <img className="delete-btn" src={deleteIcon} alt="Delete" onClick={deleteCertificate}/>
                    </div>
                </div>
            ) : (
                <div>
                    <form className="certificate-form">
                        <label >
                            Certificate:
                            <input 
                                type="text"
                                value={cerName}
                                onChange={handleCerNameChange}    
                            />
                        </label>
                        <label >
                            Institution:
                            <input 
                                type="text"
                                value={cerIns}
                                onChange={handleCerInsChange}    
                            />
                        </label>
                        <label >
                            Date:
                            <input 
                                type="text"
                                value={date}
                                onChange={handleDateChange}    
                            />
                        </label>
                        <div className='form-buttons'>
                            <div></div>
                            <button type='button' onClick={toggleMinimized}>Done</button>
                            <img  className="delete-btn" src={deleteIcon} alt="Delete" onClick={deleteCertificate}/>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )

}

export default Certificates;