import { useState, useRef, useContext } from 'react';
import { useLocation, redirect, useNavigate } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './AuthForm.module.css';

const AuthForm = () => {
  // const history = useHistory();
  const location = useLocation();
  // console.log(location)
  const loginPage = location.pathname.split("/").slice(-1)[0] == "login" ? true : false;
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate()
  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    navigate(!loginPage ? "/login" : "/signup");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (event) {
      navigate("/play");
      return
    }
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBZhsabDexE9BhcJbGxnZ4DiRlrCN9xe24';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZhsabDexE9BhcJbGxnZ4DiRlrCN9xe24';
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        // history.replace('/');
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <section className={classes.auth}>
      <section className={classes.head}>
        <h1 >{loginPage ? 'Login' : 'Sign Up'}</h1>
      </section>
      <section className={classes.body} >
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              required
              ref={passwordInputRef}
            />
          </div>
          {!loginPage &&
            <div className={classes.control}>
              <label htmlFor='password'>Confirm Password</label>
              <input
                type='password'
                id='password'
                required
                ref={passwordInputRef}
              />
            </div>
          }

          <div className={classes.actions}>
            {!isLoading && (
              <button>{loginPage ? 'Login' : 'Create Account'}</button>
            )}
            <button
              type='button'
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {loginPage ? 'Create new account' : 'Login with existing account'}
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default AuthForm;
