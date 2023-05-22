import "./Info.css";

function Info() {
    return (
        <div className="info">
            <img
                className="profile-pic"
                src="src/assets/profile.svg"
                alt="profile picture"
            />
            <h1 className="name">Laura Smith</h1>
            <p className="role">Frontend Developer</p>
            <p className="website-link">laurasmith.website</p>
            <div className="contact-btns">
                <button className="email">Email</button>
                <button className="linkedin">LinkedIn</button>
            </div>
        </div>
    );
}

export default Info;

/* 

Create separate components for:
- info (photo, name, buttons)
- about 
- interests
- footer (social icons)

*/
