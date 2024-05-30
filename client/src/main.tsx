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
import PostPage from './components/post/PostPage.tsx';
import { Provider } from 'react-redux';
import store from './redux/store/store.ts'

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
      },
      {
        path:'post',
        element: <PostPage />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
