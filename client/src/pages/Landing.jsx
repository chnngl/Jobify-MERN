import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Jobify <span>tracking </span>app
          </h1>
          <p>
            Welcome to Jobify, your personal assistant for managing job
            applications. Track every role you’ve applied to, stay organized
            with statuses and notes, and never miss a follow-up again. Whether
            you're job hunting actively or passively, we will you stay focused,
            efficient, and in control of your career journey.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login/Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
