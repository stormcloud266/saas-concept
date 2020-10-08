import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-text: #a5a4bb;
    --color-bg: #151425;
    --color-bg-light: #252438;
    --color-pink: #de4771;
    --color-purple: #DE7AFA;
    --color-blue: #6188FF;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    color: var(--color-text);
    font-size: 1.6rem;
    line-height: 1.5;
    background-color: var(--color-bg);
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    position: relative;
  }

  li { list-style: none; }

  img { 
    width: 100%;
    max-height: 50rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background-color: transparent;
    border: none;
    color: currentColor;
    cursor: pointer;
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    line-height: 1;
    padding: 1rem 2rem;
    position: relative;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    color: white;
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 3.6rem;
  }

  p {
    line-height: 2.2;
  }

  @media only screen and (max-width: 56.25em) {

    h1 {
      font-size: 3.3rem;
    }
    h2 {
      font-size: 2.8rem;
    }
  }

`
