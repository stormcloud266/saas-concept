import styled from "styled-components"

export const Features = styled.div`
  background-image: linear-gradient(to right bottom, #de4771, #eb5064, #f55e56, #fa6d46, #fb7f36);
  
`

export const FeaturesInner = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
    align-items: center;
  }
`