import './CustomButton.css';

function CustomButton({value}){
    return (
        <div className='custom-btn' role="button">
            {value}
        </div>
    );
}

export default CustomButton;