import Header from "../DefaultLayout/Header";

interface PropsTypes {
  children?: JSX.Element;
}

function HeaderOnly({ children }: PropsTypes) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
