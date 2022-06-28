import React from "react"
import styled from "styled-components"

const TextBlock = ({ children, className }) => {
  return <Container className={className}>{children}</Container>
}

export default TextBlock

const Container = styled.div`
  h1 {
    margin-bottom: 2rem;
  }
  h2 {
    margin-bottom: 1.6rem;
  }
  p {
    margin-bottom: 3.6rem;
  }

  *:last-child {
    margin-bottom: 0;
  }
`
