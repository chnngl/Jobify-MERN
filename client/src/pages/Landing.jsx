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
            job <span>tracking </span>app
          </h1>
          <p>
            I'm baby trust fund everyday carry bodega boys pok pok blackbird
            spyplane offal, tumeric biodiesel retro chillwave selfies. Adaptogen
            lo-fi la croix, kogi same forage scenester intelligentsia
            dreamcatcher schlitz put a bird on it tumblr. Brooklyn master
            cleanse tumblr, praxis enamel pin vibecession kinfolk jawn. Coloring
            book occupy kickstarter vaporware fam trust fund celiac tote bag.
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
