import React from "react";
import { Gradient, HeroContainer } from "./Elements";
import { MdNavigateNext } from "react-icons/md";

const Hero = () => {
  return (
    <HeroContainer>
      <Gradient></Gradient>
      <h1>Unlimited movies, TV shows, and more.</h1>
      <h2>Watch anywhere. Cancel anytime.</h2>
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <form action="">
        <input type="email" placeholder="Email address" />
        <button>
          Get started{" "}
          <span>
            <MdNavigateNext />
          </span>
        </button>
      </form>
    </HeroContainer>
  );
};

export default Hero;
