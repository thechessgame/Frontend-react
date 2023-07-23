import { useContext } from 'react';
import { Form, NavLink, useRouteLoaderData } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './MainNavigation.module.css';
import whiteknightleftImage from '../../assets/whiteknightleft.png';

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  let token = useRouteLoaderData('root');
  if (token === 'EXPIRED') {
    token = null
  }

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
          {!token && (
            <li>
              <NavLink to='/login' className={({ isActive }) =>
                isActive ? classes.active : classes.inactive
              }>Login</NavLink>
            </li>
          )}
          {!token && (
            <li>
              <NavLink to='/signup' className={({ isActive }) =>
                isActive ? classes.active : classes.inactive
              }>Signup</NavLink>
            </li>
          )}
          {token && (
            <li>
              <NavLink to='/profile' className={({ isActive }) =>
                isActive ? classes.active : classes.inactive
              }>Profile</NavLink>
            </li>
          )}
          {token && (
            <li>
              <NavLink to='/board' className={({ isActive }) =>
                isActive ? classes.active : classes.inactive
              }>Board</NavLink>
            </li>
          )}
          {token && (
            <li>
              <NavLink to='/play' className={({ isActive }) =>
                isActive ? classes.active : classes.inactive
              }>Play</NavLink>
            </li>
          )}
          {token && (
            <li>
              <NavLink to='/faq' className={({ isActive }) =>
                isActive ? classes.active : classes.inactive
              }>F&Q</NavLink>
            </li>
          )}
          {token && (
            <li>
              <NavLink to='/rule' className={({ isActive }) =>
                isActive ? classes.active : classes.inactive
              }>Rule</NavLink>
            </li>
          )}
          {token && (
            <li>
              <NavLink to='/contactus' className={({ isActive }) =>
                isActive ? classes.active : classes.inactive
              }>ContactUs</NavLink>
            </li>
          )}
          {token && (
            <li>
              <Form method='post' action='/logout'>
                <button >Logout</button>
              </Form>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
