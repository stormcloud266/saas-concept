import React from "react"
import styled from "styled-components"

const AccentText = ({ children }) => {
  return <Text>{children}</Text>
}

export default AccentText

const Text = styled.p`
  color: var(--color-pink);
  font-size: 1.5rem;
  line-height: 1;
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
  ::before {
    content: "";
    display: inline-block;
    height: 1px;
    width: 4.6rem;
    background-color: var(--color-pink);
    transform: translateY(-5px);
    margin-right: 1rem;
  }
`
