import "./GlobalStyles.scss";
interface PropsTypes {
  children: JSX.Element;
}

function GlobalStyles({ children }: PropsTypes) {
  return children;
}

export default GlobalStyles;
