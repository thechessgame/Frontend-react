import { useRef, useState } from "react";
import { useLocation, useNavigation, Form, Link, useActionData } from "react-router-dom";

import classes from "./AuthForm.module.css";
import LoadingSpinner from "../Loader/LoadingSpinner.jsx";

const AuthForm = () => {
  const location = useLocation();
  const loginPage = location.pathname.split("/").slice(-1)[0] == "login" ? true : false;

  const confirmpasswordInputRef = useRef();
  const passwordInputRef = useRef();
  const emailInputRef = useRef();

  let navigation = useNavigation();
  let isSubmitting = navigation.state === "submitting";

  let data = useActionData();

  let [cpLabel, setCPLabel] = useState("");
  let [pLabel, setPLabel] = useState("");
  let [eLabel, setELabel] = useState("");
  let [disableBtn, setDisableBtn] = useState(false);

  const disbaleHandler = () => {
    let email = emailInputRef?.current?.value;
    let password = passwordInputRef?.current?.value;
    let confirmpassword = confirmpasswordInputRef?.current?.value;
    let isValidEmail = false;
    let isValidPassword = false;
    if (email) {
      isValidEmail = String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
        ? true
        : false;
    }

    if (password) {
      isValidPassword = String(password).match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/) ? true : false;
    }

    if (!loginPage) {
      if (confirmpassword.length >= 6 && confirmpassword !== password) {
        setCPLabel("Confirm Password must be same as Password");
      } else {
        setCPLabel("");
      }
    }

    if (password.length >= 6 && !isValidPassword) {
      setPLabel("Password must contain: 6 to 16 valid characters, at least a number and at least a special character.");
    } else {
      setPLabel("");
    }

    if (email && !isValidEmail) {
      setELabel("Please enter a valid email");
    } else {
      setELabel("");
    }

    if (isValidPassword && isValidEmail && (confirmpassword === password || loginPage)) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  };

  return (
    <>
      {isSubmitting && <LoadingSpinner isLoading={true} />}
      {!isSubmitting && (
        <section className={classes.auth}>
          <section className={classes.head}>
            <h1>{loginPage ? "Login" : "Sign Up"}</h1>
          </section>
          <section className={classes.body}>
            <Form method="post">
              {data?.status == 401 && (
                <section className={classes.error}>
                  <div>{data?.message ? data.message : "Something went wrong"}</div>
                </section>
              )}
              <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required ref={emailInputRef} name="email" onChange={disbaleHandler} />
                {eLabel && <div className={classes.cpLabel}>{eLabel}</div>}
              </div>
              <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  required
                  ref={passwordInputRef}
                  name="password"
                  onChange={disbaleHandler}
                />
                {pLabel && <div className={classes.cpLabel}>{pLabel}</div>}
              </div>
              {!loginPage && (
                <div className={classes.control}>
                  <label htmlFor="confirmpassword">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmpassword"
                    required
                    name="confirmpassword"
                    onChange={disbaleHandler}
                    ref={confirmpasswordInputRef}
                  />
                  {cpLabel && <div className={classes.cpLabel}>{cpLabel}</div>}
                </div>
              )}

              <div className={classes.actions}>
                <button type="submit" disabled={disableBtn} className={disableBtn ? classes.disable : classes.enable}>
                  {loginPage ? "Login" : "Create Account"}
                </button>
                <Link type="button" className={classes.toggle} to={loginPage ? "/signup" : "/login"}>
                  {loginPage ? "Create new account" : "Login with existing account"}
                </Link>
              </div>
            </Form>
          </section>
        </section>
      )}
    </>
  );
};

export default AuthForm;
