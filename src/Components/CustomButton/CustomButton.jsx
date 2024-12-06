import PopupModel from '../../layout/PopupModel/PopupModel';
import './CustomButton.css';

function CustomButton({value, 
        downloader='false', href='/',fileName='#',
        popup='false', title='Default Title', description='Default Description'
        }){
    if(downloader==='true') {
        // "/files/sample.pdf"
        // "sample.pdf"
        return (
            <button className='custom-btn'>
            <a role="button"
                href= {href}
                download= {fileName}
                target="_blank" 
                rel="noopener noreferrer"
                 >{value}
            </a></button>
        );        
    }
    if(popup==='true'){
        return <PopupModel 
            value={value} title={title} description={description} contactForm='true'/>
    }

    return (
        <button className='custom-btn' role="button">
            {value}
        </button>
    );

}

export default CustomButton;