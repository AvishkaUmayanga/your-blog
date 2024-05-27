import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home.tsx';
import BlogPage from './components/blog/BlogPage.tsx';
import AboutPage from './components/about/AboutPage.tsx';
import LoginPage from './components/login/LoginPage.tsx';
import SignupPage from './components/signup/SignupPage.tsx';
import DashBoard from './components/dashboard/DashBoard.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:'',
        element: <Home />
      },
      {
        path:'blog',
        element: <BlogPage />
      },
      {
        path:'about',
        element: <AboutPage />
      },
      {
        path:'login',
        element: <LoginPage />
      },
      {
        path:'signup',
        element: <SignupPage />
      },
      {
        path:'dashboard',
        element: <DashBoard />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
