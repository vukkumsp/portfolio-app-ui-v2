import { useState } from "react";
import './PopupModel.css';
import CustomButton from './../../components/CustomButton/CustomButton.jsx';
import './../../components/CustomButton/CustomButton.css'
import ContactMeForm from "../../components/ContactMeForm/ContactMeForm.jsx";

export default function PopupModel({
    value, title, description, contactForm='false'
}){
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const linkedInConfig = {
      href: 'https://www.linkedin.com/in/vukkumsp/',
      icon: './assets/icons/linkedin.svg',
      disabled: false
    }
  
    return (
      <div>
        <button className='custom-btn btn' onClick={openModal}>{value}</button>
  
        {isOpen && (
          <div className="modal-overlay">
            
            <div className="modal-content">
            <div className="model-button-holder">
                <button className='custom-btn' onClick={closeModal}>❌</button>
              </div>
              <CustomButton value='Message me on LinkedIn' type='link' config={linkedInConfig} />
              <div className="or-divider">
                <hr className="or-divider-line"/>
                <span className="or-divider-text">or</span>
                <hr className="or-divider-line"/>
              </div>
              {
                (contactForm==='true')?
                    <ContactMeForm />:
                    <>                    
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </>
              }

            </div>
          </div>
        )}
      </div>
    );
}