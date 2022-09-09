import Header from "./Header";
import Sidebar from "./Sidebar";

interface PropsTypes {
  children?: JSX.Element;
}

function DefaultLayout({ children }: PropsTypes) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
