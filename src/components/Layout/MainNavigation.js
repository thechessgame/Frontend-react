import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './MainNavigation.module.css';
import whiteknightleftImage from '../../assets/whiteknightleft.png';

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  // const logoutHandler = () => {
  //   authCtx.logout();
  //   // optional: redirect the user
  // };

  return (
    <header className={`${classes.header} fixed-top`} >
      <img className={classes.img} src={whiteknightleftImage} alt="" />
      <NavLink className={`${classes.title} ${classes.inactive}`} to='/'>
        <div className={classes.logo}>CHESS GAME</div>
      </NavLink>
      <nav style={{ "marginTop": "1.5%" }}>
        <ul>
          <li>
            <NavLink to='/' end className={({ isActive }) =>
              isActive ? classes.active : classes.inactive
            } >Home</NavLink>
          </li>
          {!isLoggedIn && (
            <li>
              <NavLink to='/login' className={({ isActive }) =>
                isActive ? classes.active : classes.inactive
              }>Login</NavLink>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <NavLink to='/signup' className={({ isActive }) =>
                isActive ? classes.active : classes.inactive
              }>Signup</NavLink>
            </li>
          )}
          {/* {isLoggedIn && (
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )} */}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
