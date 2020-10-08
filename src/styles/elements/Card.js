import styled from "styled-components"

export const Card = styled.div`
  background-color: var(--color-bg-light);
  flex: 1;
  margin-right: 4.8rem;
  padding: 6rem 4rem;
  box-shadow: 0 4px 25px -2px rgba(0,0,0,.45);
  border-radius: 4px;

  :last-child {
    margin-right: 0;
  }

  h3 {
    margin-top: 2.2rem;
    margin-bottom: 1.4rem;
  }
`