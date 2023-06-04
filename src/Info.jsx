import "./Info.css";

function Info() {
    return (
        <div className="info">
            <img
                className="profile-pic"
                src="src/assets/profile.svg"
                alt="profile picture"
            />
            <div className="info-content">
                <h1 className="name">Laura Smith</h1>
                <p className="role">Frontend Developer</p>
                <p className="website-link">laurasmith.website</p>
                <div className="contact-btns">
                    <button className="email">
                        <img src="src/assets/email.png" alt="image of email" />
                        Email
                    </button>
                    <button className="linkedIn">
                        <img
                            src="src/assets/linkedIn.png"
                            alt="linkedin logo"
                        />
                        LinkedIn
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Info;