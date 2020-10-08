import styled from "styled-components"

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`

export const NavToggle = styled.button`
  display: none;
  padding: .5rem;
  position: relative;
  z-index: 999;

  @media only screen and (max-width: 56.25em) {
    display: block;
  }
`

export const Nav = styled.nav`
  display: flex;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    margin-left: 7.2rem;
  }

  a {
    transition: color .2s;
  }

  a:hover {
    color: var(--color-pink);
  }

  @media only screen and (max-width: 56.25em) {
    visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden' };
    opacity: ${({ isOpen }) => isOpen ? 1 : 0 };
    transition: opacity .2s;

    position: absolute;
    background-color: #333;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;

    ul {
      flex-direction: column;
    }

    li {
      margin-left: 0;
      margin-bottom: 2.8rem;
      transition: opacity .2s, transform .2s;

      opacity: ${({ isOpen }) => isOpen ? 1 : 0 };
      transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(1rem)' };

      &:nth-child(1) { transition-delay: .1s;}
      &:nth-child(2) { transition-delay: .15s;}
      &:nth-child(3) { transition-delay: .2s;}
      &:nth-child(4) { transition-delay: .25s;}
      &:nth-child(5) { transition-delay: .3s;}
    }

    a {
      font-size: 2.8rem;
      padding: .5rem 1rem;
    }
  }
`

export const Name = styled.nav``