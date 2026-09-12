import './ProfessionalSummary.css';

function ProfessionalSummary({ summary }) {
    return (
        <div className="summary-container">
            <p>{summary || "No summary available."}</p>
        </div>
    );
}

export default ProfessionalSummary;