// import { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import PlayPage from './pages/PlayPage';
// import AuthContext from './store/auth-context';
import FaqPage from './pages/FaqPage';
import RulePage from './pages/RulePage';
import BoardPage from './pages/BoardPage';
import ContactusPage from './pages/ContactusPage'
import ProfilePage from './pages/ProfilePage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // errorElement: <ErrorPage />,
    id: 'root',
    // loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'login',
        element: <AuthPage />,
        // action: authAction,
      },
      {
        path: 'signup',
        element: <AuthPage />,
        // action: authAction,
      },
      {
        path: 'play',
        element: <PlayPage />,
        // action: authAction,
      },
      {
        path: 'board',
        element: <BoardPage />,
        // action: authAction,
      },
      {
        path: 'faq',
        element: <FaqPage />,
        // action: authAction,
      },
      {
        path: 'rule',
        element: <RulePage />,
        // action: authAction,
      },
      {
        path: 'contactus',
        element: <ContactusPage />,
        // action: authAction,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
        // action: authAction,
      },
    ],
  },
]);

function App() {
  // const authCtx = useContext(AuthContext);
  return <RouterProvider router={router} />;
}

export default App;
