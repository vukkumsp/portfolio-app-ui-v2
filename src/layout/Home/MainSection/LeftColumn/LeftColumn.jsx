import './LeftColumn.css';

function LeftColumn(){
    return (
        <div className='left-column'>
            <img
                className="profile-avatar"
                src="/data/profile-images/profile1.png"
                alt="Vukkum Sai Prakash"
            />
        </div>
    );
}

export default LeftColumn;