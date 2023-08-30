/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
import { useState } from "react";
import editIcon from '../assets/edit-icon.png'

function GeneralInfo({ 
    firstName, 
    setFirstName, 
    lastName, 
    setLastName, 
    phone, 
    setPhone, 
    email, 
    setEmail,
    loc,
    setLoc
}) {

    const [minimized, setMinimized] = useState(false);
    const [phoneValid, setPhoneValid] = useState(true)
    const [emailValid, setEmailValid] = useState(true);

    const toggleMinimized = () => {
        setMinimized(!minimized);
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);

    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);

    };

    const validateContact = (phone) => {
        // Regular expression to validate phone format
        const contactRegex = /^[\d\s+\(\)]+$/;
        return contactRegex.test(phone)
    }

    const handleContactChange = (e) => {
        setPhone(e.target.value);
        setPhoneValid(validateContact(e.target.value))
    };

    const validateEmail = (email) => {
        // Regular expression to validate email format
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailValid(validateEmail(e.target.value))
    };

    const handleLocChange = (e) => {
        setLoc(e.target.value)
    }

    return (
        <div className={`input-box general-info-input ${minimized ? 'minimized' : ''}`}>
            { minimized ? (
                <div className="minimized-view"> 
                    <div className="mini-value">{firstName} {lastName}</div>
                    <div>
                        <img className="edit-btn" src={editIcon} alt="Edit" onClick={toggleMinimized}/>
                        <div className="button-option"></div>
                    </div>
                </div>
            ) : (
            <div>
                <form className="general-info-form">
                    <label>
                        First Name:  
                        <input
                        className="gen-inputs"
                        type="text"
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />
                    </label>
                    <label>
                        Last Name:
                        <input
                        className="gen-inputs"
                        type="text"
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                    </label>
                    <label>
                        Phone Number:
                        <input
                        className="gen-inputs"
                        type="text"
                        value={phone}
                        onChange={handleContactChange}
                        required
                        style={{borderColor: phoneValid ? 'initial' : 'red'}}
                    />
                    {!phoneValid && <p className="errorMsg" style={{ color: 'red' }}>Phone number Invalid</p>}
                    </label>
                    <label>
                        Email:
                        <input
                        className="gen-inputs"
                        type="text" 
                        value={email}
                        onChange={handleEmailChange}
                        required
                        style={{borderColor: emailValid ? 'initial' : 'red'}}
                    />
                    {!emailValid && <p className="errorMsg" style={{ color: 'red' }}>Invalid email format</p>}
                    </label>
                    <label>
                        Your Location:
                        <input
                        className="gen-inputs"
                        type="text"
                        value={loc}
                        onChange={handleLocChange}
                        />
                    </label>
                    <div className="form-buttons">
                        <div></div>
                        <button type="button" onClick={ () => { phoneValid && emailValid ? toggleMinimized() : 
                            alert("Please make sure the Phone and Email inputs are valid.")}}
                            >Done</button>
                        <div></div>
                    </div>
                </form>
            </div>
            )}
        </div>

    );
}

export default GeneralInfo;