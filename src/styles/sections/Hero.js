import styled from "styled-components"
import { Wrapper, Section } from "@styles/global"

export const StyledHero = styled.section`
  ${Wrapper};
  ${Section};

  position: relative;
  height: 90vh;
  display: flex;
  align-items: center;

  div {
    flex: 1;
  }

  img {
    max-height: 50rem;
  }

  h1 {
    color: #fff;
    font-size: 4rem;
  }

`