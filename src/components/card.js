import React from "react"
import styled from "styled-components"

const Card = ({ icon, title, body }) => (
  <StyledCard>
    <span>{icon}</span>
    <h3>{title}</h3>
    <p>{body}</p>
  </StyledCard>
)

export default Card

const StyledCard = styled.div`
  background-color: var(--color-bg-secondary);
  flex: 1;
  margin-right: 2rem;
  padding: 6rem 4rem;
  box-shadow: 0 3px 20px -2px rgba(0, 0, 0, 0.45);
  border-radius: 4px;
  max-width: 38rem;
  transition: all 0.3s ease;

  :last-child {
    margin-right: 0;
  }

  :hover {
    transform: translateY(-1rem);
    box-shadow: 0 6px 30px -2px rgba(0, 0, 0, 0.55);
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
