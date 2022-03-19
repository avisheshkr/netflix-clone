import React from "react";
import { NavContainer } from "./Elements";

const Navbar = () => {
  return (
    <NavContainer>
      <a href="">
        <img src="images/netflix-logo.png" alt="Netflix Logo" />
      </a>
      <button>Sign in</button>
    </NavContainer>
  );
};

export default Navbar;
