import { Form, NavLink, useRouteLoaderData } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import whiteknightleftImage from "../../assets/whiteknightleft.png";
import NavButton from "./NavButton";
let navBtn = [
  { to: "/", title: "Home" },
  { to: "/login", title: "Login" },
  { to: "/signup", title: "Singup" },
  { to: "/profile", title: "Profile" },
  { to: "/board", title: "Board" },
  { to: "/play", title: "Play" },
  { to: "/faq", title: "F&Q" },
  { to: "/rule", title: "Rule" },
  { to: "/contactus", title: "ContactUs" },
];

let authTrueNav = ["Home", "Profile", "Board", "Play", "F&Q", "Rule", "ContactUs"];
let authFalseNav = ["Home", "Login", "Singup", "Rule", "ContactUs"];

const MainNavigation = () => {
  let token = useRouteLoaderData("root");
  if (token === "EXPIRED") {
    token = null;
  }

  let renderBtn = navBtn.filter((key) => {
    if (token) return authTrueNav.includes(key.title);
    if (!token) return authFalseNav.includes(key.title);
  });

  return (
    <header className={`${classes.header} fixed-top`}>
      <img className={classes.img} src={whiteknightleftImage} alt="" />
      <NavLink className={`${classes.title} ${classes.inactive}`} to="/">
        <div className={classes.logo}>CHESS GAME</div>
      </NavLink>
      <nav style={{ marginTop: "1.5%" }}>
        <ul>
          {renderBtn.map((key, i) => (
            <NavButton key={i} to={key.to}>{key.title}</NavButton>
          ))}
          {token && (
            <li>
              <Form method="post" action="/logout">
                <button>Logout</button>
              </Form>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
