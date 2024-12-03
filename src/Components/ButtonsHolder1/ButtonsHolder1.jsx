import CustomButton from '../CustomButton/CustomButton';
import './ButtonsHolder1.css';

function ButtonsHolder1() {
    return (
        <div className='buttons-holder-1'>
            <CustomButton value="Contact me" />
            <CustomButton value="Download CV" />
            
        </div>
    );
}

export default ButtonsHolder1;