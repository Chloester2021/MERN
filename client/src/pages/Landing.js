import React from "react";
import { Logo } from "../components";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby sartorial banh mi meditation cardigan, subway tile cornhole
            organic +1 selfies you probably haven't heard of them wolf
            succulents umami microdosing. Mlkshk iceland offal, praxis kinfolk
            occupy next level paleo single-origin coffee. Hell of marfa subway
            tile lyft tote bag, 3 wolf moon typewriter keffiyeh.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;
