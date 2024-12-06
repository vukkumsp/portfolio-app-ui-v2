import CustomButton from '../CustomButton/CustomButton';
import './ButtonsHolder1.css';

function ButtonsHolder1() {
    return (
        <div className='buttons-holder-1'>
            <CustomButton value="Contact me" 
                popup='true'/>
            <CustomButton value="Download CV" 
                downloader='true' 
                href='/data/Vukkum Sai Prakash - Fullstack Developer.pdf'
                fileName='Vukkum Sai Prakash - Fullstack Developer.pdf'/>
            
        </div>
    );
}

export default ButtonsHolder1;