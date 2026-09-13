import './ProfessionalSummary.css';

function ProfessionalSummary({ summary }) {
    return (
        <fieldset className="summary-container">
            <legend>About Me</legend>
            <p>{summary || "No summary available."}</p>
        </fieldset>
    );
}

export default ProfessionalSummary;