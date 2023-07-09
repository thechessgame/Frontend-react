import { Fragment } from 'react';

import MainNavigation from './MainNavigation';
import { Outlet } from 'react-router-dom';

const Layout = (props) => {
  console.log("this", props.children)
  return (
    <Fragment>
      <MainNavigation />
      <Outlet />
    </Fragment>
  );
};

export default Layout;
