import { Fragment } from "react";
import MainNav from "./mainNav";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNav />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
