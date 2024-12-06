import './CustomButton.css';

function CustomButton({value, downloader='false', href='/',fileName='#'}){
    if(downloader==='false'){
        return (
            <div className='custom-btn' role="button">
                {value}
            </div>
        );
    }
    else {
        // "/files/sample.pdf"
        // "sample.pdf"
        return (
            <a className='custom-btn' role="button"
                href= {href}
                download= {fileName}
                target="_blank" 
                rel="noopener noreferrer"
                 >{value}
            </a>
        );        
    }

}

export default CustomButton;