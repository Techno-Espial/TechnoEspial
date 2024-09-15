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
import MainClass from './MainClass/MainClass';
import Notifications from './Notifications/Notifications';
import Announcements from './Announcements/Announcements';
import MyProgress from './MyProgress/MyProgress';
import AssignmentMarks from './AssignmentMarks/AssignmentMarks';
import CourseDetails from './CourseDetails/CourseDetails';
import Register from './Register/Register';
import Dashboard from './Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/data.json')
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
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/mainClass",
        element: <MainClass></MainClass>
      },
      {
        path: "/notifications",
        element: <Notifications></Notifications>
      },
      {
        path: "/announcement",
        element: <Announcements></Announcements>
      },
      {
        path: "/myProgress",
        element: <MyProgress></MyProgress>
      },
      {
        path: "/assignmentMarks",
        element: <AssignmentMarks></AssignmentMarks>
      },
      {
        path: "/courseDetails/:id",
        element: <CourseDetails></CourseDetails>,
        // loader: ({ params }) => fetch(`/data.json`).then(res => res.json()).then(data => data[params.id])
        loader: () => fetch('/data.json')
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
