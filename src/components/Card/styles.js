import styled from "styled-components"

export const StyledCard = styled.div`
  background-color: var(--color-bg-light);
  flex: 1;
  margin-right: 2rem;
  padding: 6rem 4rem;
  box-shadow: 0 4px 25px -2px rgba(0,0,0,.45);
  border-radius: 4px;
  max-width: 38rem;

  :last-child {
    margin-right: 0;
  }

  h3 {
    margin-top: 2.2rem;
    margin-bottom: 1.4rem;
  }

  @media only screen and (max-width: 56.25em) {
    max-width: 56rem;
    margin-right: 0;
    margin-bottom: 2rem;
  }
`