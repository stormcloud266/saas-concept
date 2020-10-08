import styled from "styled-components"
import { Wrapper, Section } from "@styles/global"

export const TextBlock = styled.section`
  ${Section};
  background-color: ${({ light }) => light ? 'var(--color-bg-light)' : 'var(--color-bg)'};
`

export const TextInner = styled.div`
  ${Wrapper};
  display: flex;
  justify-content: space-between;
  align-items: center;

  > * {
    flex: 1;
    max-width: 56rem;
  }

  div:nth-child(1) {
    order: ${({ textLeft }) => textLeft ? 2 : 1};
  }

  div:nth-child(2) {
    order: ${({ textLeft }) => textLeft ? 1 : 2};
  }
`