import './../../components/CustomButton/CustomButton.css';
import './ContactMeForm.css';

export default function ContactMeForm() {
    return (
        <form className="contact-me-form">
            <label for="name">Name</label><br/>
            <input type="text" id="name" placeholder="Name" /><br/>
            <label for="email">Email</label><br/>
            <input type="email" id="email" placeholder="Email" /><br/>
            <label for="message">Message</label><br/>
            <textarea id="message" placeholder="Enter your message here"></textarea><br/>
            <button className='custom-btn' type="submit">Submit</button>
        </form>
    );
}