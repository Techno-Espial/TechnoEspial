import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Home/Home';
import Main from './Main/Main';
import Schedule from './Schedule/Schedule';
import MyClass from './MyClass/MyClass';
import Blog from './Blog/Blog';
import Login from './Login/Login';
import Error from './Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/schedule",
        element: <Schedule></Schedule>
      },
      {
        path: "/myClass",
        element: <MyClass></MyClass>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
