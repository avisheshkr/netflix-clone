import styled from "styled-components";

export const NavContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: -2rem auto 0 auto;
  margin-top: -2rem;
  padding: 0 1.5rem;
  width: 100%;
  a {
    img {
      max-width: 12rem;
    }
  }

  button {
    padding: 0.7rem 1rem;
  }

  @media (min-width: 768px) {
    padding: 0 5rem;
  }

  @media (min-width: 1500px) {
    max-width: 150rem;
  }
`;
