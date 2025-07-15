import PopupModel from '../../layout/PopupModel/PopupModel.jsx';
import './CustomButton.css';

function CustomButton({value, type='default', config={},
        downloader='false', href='/',fileName='#',
        popup='false', title='Default Title', description='Default Description'
        }){
    console.log(config);
    switch(type){
        case 'downloader':
            return (
                <a className='custom-btn btn' role="button"
                    href= {config.href}
                    download= {config.fileName}
                    target="_blank" 
                    rel="noopener noreferrer"
                     >{value}
                </a>
            );
        case 'popup':
            return (<PopupModel 
                value={value} 
                title={config.title} 
                description={config.description} 
                contactForm='false'/>);
        case 'link':
            if(config.emoji){ 
                if(config.disabled==='true'){
                    return (
                        <button className='custom-btn disabled-btn' role="button" disabled>
                                <span className='emoji-element'>⚪</span>
                                {value}
                        </button>
                    );
                }
                return (
                    <a className='custom-btn btn' role="button"
                        href= {config.href}
                        target="_blank" 
                        rel="noopener noreferrer">
                            <span className='emoji-element'>{config.emoji}</span>
                            {value}
                    </a>
                );
            } else
            if(config.icon){
                return (
                    <a className='custom-btn btn' role="button"
                        href= {config.href}
                        target="_blank" 
                        rel="noopener noreferrer">
                            <img className='icon-element' src={config.icon}/>
                            {value}
                    </a>
                );
            }
        default:
            return (
                <button className='custom-btn btn' role="button">
                    {value}
                </button>
            );
    }

    // if(type==='downloader') {
    //     // "/files/sample.pdf"
    //     // "sample.pdf"
    //     return (
    //         <button className='custom-btn btn'>
    //         <a role="button"
    //             href= {config.href}
    //             download= {config.fileName}
    //             target="_blank" 
    //             rel="noopener noreferrer"
    //              >{value}
    //         </a></button>
    //     );        
    // }
    // if(type==='popup'){
    //     return (<PopupModel 
    //         value={value} 
    //         title={config.title} 
    //         description={config.description} 
    //         contactForm='true'/>);
    // }
    // return (
    //     <button className='custom-btn btn' role="button">
    //         {value}
    //     </button>
    // );
}

export default CustomButton;