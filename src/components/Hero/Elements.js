import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
  background-image: url("images/NP-en-20220307-popsignuptwoweeks-perspective_alpha_website_large.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 55rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  &:after {
    content: "";
    width: 100%;
    height: 1rem;
    background-color: var(--border-color);
    padding: 0 !important;
    position: absolute;
    left: 0;
    bottom: -1rem;
  }

  h1,
  h2,
  h3,
  form {
    z-index: 100;
    padding: 0 2rem;
  }

  h1 {
    padding-top: 6rem;
    max-width: 70rem;
  }

  h3 {
    max-width: 30rem;
    padding: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 2rem;

    input {
      font-family: inherit;
      padding: 1.5rem 1rem;
      font-size: inherit;
      width: 100%;
      max-width: 50rem;
    }

    button {
      padding: 1rem 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      // transition: 0.4s;

      &:hover {
        background-color: red;
      }

      span {
        font-size: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  @media (min-width: 550px) {
    min-height: 75rem;

    h3 {
      font-size: 2.5rem;
      max-width: 50rem;
    }
  }

  @media (min-width: 950px) {
    h3 {
      max-width: 100%;
      font-size: 2rem;
    }

    form {
      flex-direction: row;
      gap: 0;
      height: 7rem;

      input {
        height: 100%;
      }

      button {
        height: 100%;
        border-radius: 0;
        font-size: 3rem;

        span {
          font-size: 4rem;
        }
      }
    }
  }

  @media (min-width: 1500px) {
    // min-height: 100vh;

    h1 {
      font-size: 6.5rem;
    }
  }
`;

export const Gradient = styled.div`
  width: 100%;
  height: 100%;
  background-image: radial-gradient(transparent, #000);
  position: absolute;
  top: 0;
  left: 0;
`;
