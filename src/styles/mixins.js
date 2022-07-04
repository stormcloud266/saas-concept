import { css } from "styled-components"

export const mixins = {
  wrapper: css`
    width: 100%;
    max-width: 126rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    margin-left: auto;
    margin-right: auto;
  `,
  wrapperSmOnTab: css`
    width: 100%;
    max-width: 126rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    margin-left: auto;
    margin-right: auto;
    @media only screen and (max-width: 56.25em) {
      max-width: 60rem;
    }
  `,
  section: css`
    padding-top: 14rem;
    padding-bottom: 14rem;
    @media only screen and (max-width: 56.25em) {
      padding-top: 10rem;
      padding-bottom: 10rem;
    }

    @media only screen and (max-width: 37.5em) {
      padding-top: 8rem;
      padding-bottom: 8rem;
    }
  `,
  button: css`
    background-color: var(--color-pink);
    color: #fff;
    padding: 1.4rem 4rem;
    border-radius: 6rem;
    display: inline-block;
    box-shadow: 0 3px 25px rgba(222, 71, 113, 0.5);
    transition: all 0.2s;

    :hover {
      transform: translateY(-1px);
      background-color: #c3385f;
    }
  `,
}
