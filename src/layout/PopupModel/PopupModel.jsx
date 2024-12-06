import { useState } from "react";
import './PopupModel.css';
import './../../components/CustomButton/CustomButton.css'
import ContactMeForm from "../../components/ContactMeForm/ContactMeForm";

export default function PopupModel({
    value, title, description, contactForm='false'
}){
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
  
    return (
      <div>
        <button className='custom-btn' onClick={openModal}>{value}</button>
  
        {isOpen && (
          <div className="modal-overlay">
            
            <div className="modal-content">
            <div className="model-button-holder">
                <button className='custom-btn' onClick={closeModal}>❌</button>
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