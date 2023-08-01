import AuthForm from '../components/Auth/AuthForm';
import { auth } from '../constants/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { redirect, json } from 'react-router-dom';
import api from '../util/api';

const AuthPage = () => {
  return <AuthForm />;
};

export default AuthPage;

export async function action({ request }) {
  const mode = request?.url?.split('/').at(-1);

  if (mode !== 'login' && mode !== 'signup') {
    throw json({ message: 'Unsupported mode.' }, { status: 422 });
  }

  const data = await request.formData();
  let email = data.get('email')
  let password = data.get('password')
  let username = data.get('username');

  let response = null;
  try {
    if (mode === 'signup') {
      response = await createUserWithEmailAndPassword(auth, email, password)
    } else if (mode === 'login') {
      response = await signInWithEmailAndPassword(auth, email, password)
    }
  } catch (error) {
    let errorMsg = "Something went wrong, could not authenticate user.";
    console.log(error.message)
    if (error.message.includes("email-already-in-use")) {
      errorMsg = "You have already registered with given email."
    } else if (error.message.includes("wrong-password")) {
      errorMsg = "Please use correct password"
    } else if (error.message.includes("user-not-found")) {
      errorMsg = "You haven't registered for our application."
    }
    return { message: errorMsg, status: 401 };
  }

  let accessToken = response?.user?.accessToken;
  let useremail = response?.user?.email;
  let uid = response?.user?.uid;

  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('email', useremail);
  localStorage.setItem('uid', uid);

  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expiration', expiration.toISOString());

  try {
    if (mode === 'signup') {
      await api.createUser({
        email, userName: username
      })
    }
  } catch (error) {
    let errorMsg = "Something went wrong, could not authenticate user.";
    console.log(error.message)
    return { message: errorMsg, status: 401 };
  }
  return redirect('/');
}