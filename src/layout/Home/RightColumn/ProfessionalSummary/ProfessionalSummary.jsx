import './ProfessionalSummary.css';

function ProfessionalSummary({ summary }) {
    return (
        <fieldset className="summary-container">
            <legend>Professional Summary</legend>
            <p>{summary || "No summary available."}</p>
        </fieldset>
    );
}

export default ProfessionalSummary;