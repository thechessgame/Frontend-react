// import { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";

import Layout from './components/Layout/Layout';
import AuthPage, { action as authAction } from './pages/AuthPage';
import HomePage from './pages/HomePage';
import PlayPage from './pages/PlayPage';
import FaqPage from './pages/FaqPage';
import RulePage from './pages/RulePage';
import BoardPage from './pages/BoardPage';
import ContactusPage, { action as contactusAction } from './pages/ContactusPage'
import ProfilePage from './pages/ProfilePage'
import { action as logoutAction } from './pages/LogoutPage';
import { tokenLoader, checkAuthLoader, checkAuthTrueLoader } from './util/auth';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'login',
        element: <AuthPage />,
        action: authAction,
        loader: checkAuthTrueLoader
      },
      {
        path: 'signup',
        element: <AuthPage />,
        action: authAction,
        loader: checkAuthTrueLoader
      },
      {
        path: 'play',
        element: <PlayPage />,
        loader: checkAuthLoader,
      },
      {
        path: 'board',
        element: <BoardPage />,
        loader: checkAuthLoader,
      },
      {
        path: 'faq',
        element: <FaqPage />,
        loader: checkAuthLoader,
      },
      {
        path: 'rule',
        element: <RulePage />,
      },
      {
        path: 'contactus',
        element: <ContactusPage />,
        action: contactusAction
      },
      {
        path: 'profile',
        element: <ProfilePage />,
        loader: checkAuthLoader,
      },
      {
        path: 'logout',
        loader: checkAuthLoader,
        action: logoutAction
      }
    ],
  },
]);

function App() {
  // const authCtx = useContext(AuthContext);
  return <RouterProvider router={router} />;
}

export default App;
