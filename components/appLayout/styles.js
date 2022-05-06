import css from "styled-jsx/css";
import { colors, fonts, breakpoints } from "../../styles/theme";
const bgColor = addOpacityColor(colors.primary, 0.2);
import { addOpacityColor } from "../../styles/utils";

export const globalStyles = css.global`
  html,
  body {
    background-image: radial-gradient(${bgColor} 1px, transparent 1px),
      radial-gradient(${bgColor} 1px, transparent 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default css`
  div {
    display: grid;
    height: 100vh;
    place-items: center;
  }
  main {
    background: #fff;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breakpoints.mobile};
    }
  }
`;
