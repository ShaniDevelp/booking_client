import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Root from './layout/Root';
import MyBookings from './components/myBookings';
import Login from './auth/login';
import Signup from './auth/signUp';
import AuthProvider from './provider/AuthProvider';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [

        {
          path: '/',
          element: <Home />
        },
        {
          path: '/mybookings',
          element: <MyBookings />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/signup',
          element: <Signup />
        }
      ]
    }
  ])
  return (
    
        <RouterProvider router={router} />
     
  );
}

export default App;
