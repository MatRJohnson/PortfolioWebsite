import { FC } from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout: FC<any> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
