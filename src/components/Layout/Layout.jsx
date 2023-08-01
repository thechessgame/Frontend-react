import { Fragment, useEffect } from "react";

import MainNavigation from "./MainNavigation";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import { getTokenDuration } from "../../util/auth";
import { auth } from "../../constants/firebase";

const Layout = (props) => {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token == "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDuration();
    setTimeout(async () => {
      const accessToken = await auth.currentUser.getIdToken(true);

      const expiration = new Date();
      expiration.setHours(expiration.getHours() + 1);

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("expiration", expiration.toISOString());
      // submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [submit, token]);

  return (
    <Fragment>
      <MainNavigation />
      <Outlet />
    </Fragment>
  );
};

export default Layout;
