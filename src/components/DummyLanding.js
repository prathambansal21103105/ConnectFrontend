import { Link } from "react-router-dom";

const DummyLanding = () => {
    return (
        <div>
            <Link to="/job">Job Opprtunities</Link>
            <Link to="/learning">Learning</Link>
            <Link to="/signUp">SignUp</Link>
        </div>
    );
}

export default DummyLanding;