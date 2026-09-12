import CustomButton from './CustomButton/CustomButton.jsx';
import './ButtonsHolder1.css';

function ButtonsHolder1({ linkedInConfig, downloadResumeConfig, githubConfig }) {
    return (
        <div className='buttons-holder-1'>
            <CustomButton value='Message me on LinkedIn' 
                type='link' config={linkedInConfig} />
            <CustomButton value="Download CV" 
                type='downloader' 
                config={downloadResumeConfig}/>
            <CustomButton value="Github"
                type='link' config={githubConfig} />
        </div>
    );
}

export default ButtonsHolder1;