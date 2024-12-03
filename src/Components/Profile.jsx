function Profile() {
    return (
        <section className="profile-section">
            <fieldset className="profile-skills">
                <legend>
                    Skills
                </legend>
                <div className="languages-label">Languages</div>
                <div className="languages">
                    JavaScript, Typescript, HTML, CSS, Java 11
                </div>
                <div className="frameworks-libraries-label">Frameworks/Libraries</div>
                <div className="frameworks-libraries">
                    Spring Boot, Angular 4 to 18, Bootstrap 5
                </div>
                <div className="databases-label">
                    Database
                </div>
                <div className="databases">
                    RDBMS
                </div>
                <div className="software-arch-labels">Software Architectures</div>
                <div className="software-archs">
                    Serverless, Microservices, Monolithic
                </div>
                <div className="testing-tools-label">Testing Tools</div>
                <div className="testing-tools">
                    JUnit, PlaywrightJs
                </div>
                <div className="api-techniques-label">API Techniques</div>
                <div className="api-techniques">
                    RESTful API, GraphQL
                </div>
                <div className="dev-tools-label">
                    Development Tools
                </div>
                <div className="dev-tools">
                    VSCode, IntelliJ, STS/Eclipse, Git, Github, Jenkins, Docker, npm, maven, npm
                </div>

            </fieldset>



            {/* <!-- ------------------------------------------------------------------------------ --> */}

            <fieldset className="contact-me">
                <legend>
                    Contact Me
                </legend>
                {/* <!-- <iframe _ngcontent-luu-c11="" src="https://docs.google.com/forms/d/e/1FAIpQLSeZ_QcRMS1ate1zIBXFkp3-asz5UGjeFAENauWaymYXTgTgZA/viewform?embedded=true" width="400" height="450" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> -->
          <!-- <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdyeAqC8XrfQ0i9py5fTi6D-6M_WOP6gGLvYowPe2K9ciCU-A/viewform?embedded=true" width="640" height="682" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> --> */}
                <form className="contact-me-form">
                    <label for="name">Name</label>
                    <input type="text" id="name" placeholder="Name"/>
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="Email"/>
                            <label for="message">Message</label>
                            <textarea id="message" placeholder="Enter your message here"></textarea>
                            <button className="contact-me-submit-btn" type="submit">Submit</button>
                </form>
            </fieldset>
        </section>
    );
}

export default Profile;