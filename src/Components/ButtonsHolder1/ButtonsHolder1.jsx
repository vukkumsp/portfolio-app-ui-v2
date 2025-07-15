import CustomButton from '../CustomButton/CustomButton.jsx';
import './ButtonsHolder1.css';

function ButtonsHolder1() {
    let popupConfig = {
        title: 'Contact Me', description:''
    }
    let downloadConfig = {
        href: '/data/Vukkum Sai Prakash - Fullstack Developer.pdf',
        fileName: 'Vukkum Sai Prakash - Fullstack Developer.pdf'
    }
    const linkedInConfig = {
      href: 'https://www.linkedin.com/in/vukkumsp/',
      icon: './assets/icons/linkedin.svg',
      disabled: false
    }
    return (
        <div className='buttons-holder-1'>
            {/* <CustomButton value="Contact me" 
                type='popup' config={popupConfig}/> */}
            <CustomButton value='Message me on LinkedIn' 
                type='link' config={linkedInConfig} />
            <CustomButton value="Download CV" 
                type='downloader' 
                config={downloadConfig}/>
        </div>
    );
}

export default ButtonsHolder1;