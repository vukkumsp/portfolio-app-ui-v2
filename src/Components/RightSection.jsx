function RightSection() {
    return (
        <section className="right-section">
            <fieldset className="work-experience">
                <legend>
                    Work Experience
                </legend>
                <div className="work">
                    Some experience
                </div>
            </fieldset>

            {/* <!-- ------------------------------------------------------------------------------ --> */}

            <fieldset className="personal-projects">
                <legend>Personal Projects</legend>
                <div className="personal-project">
                    <div className="personal-project-name">
                        Polling Booth
                    </div>
                    <div className="personal-project-details">
                        <div>Description:</div>
                        <div>Github:</div>
                    </div>
                </div>

                <hr />

                <div className="personal-project">
                    <div className="personal-project-name">
                        Local Entertainment System
                    </div>
                    <div className="personal-project-details">
                        <div>Description:</div>
                        <div>Github:</div>
                    </div>
                </div>
            </fieldset>
        </section>
    );
}

export default RightSection;