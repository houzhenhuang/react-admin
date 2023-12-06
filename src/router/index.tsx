import AuthRoute from "../components/AuthRoute";

import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Blog from "../pages/Blog";
import Tom from "../pages/User/Tom";
import Bill from "../pages/User/Bill";
import Alex from "../pages/User/Alex";
import React from "react";

// import Register from "@/pages/Register";
const Register = React.lazy(() => require("@/pages/Register"));

const router: AppRoute[] = [
  {
    path: "/",
    fullPath: '/',
    element: <AuthRoute><Layout /></AuthRoute>,
    children: [
      {
        index: true,
        path: '/',
        fullPath: '/',
        element: <Home />,
        isAuth: true
      },
      {
        path: "blog",
        fullPath: '/blog',
        element: <Blog />,
        isAuth: true
      },
      {
        path: "about",
        fullPath: '/about',
        element: <About />,
        isAuth: true
      },
      {
        path: "user",
        fullPath: '/user',
        isAuth: true,
        children: [
          {
            path: "tom",
            fullPath: '/user/tom',
            element: <Tom />,
            isAuth: true
          },
          {
            path: "bill",
            fullPath: '/user/bill',
            element: <Bill />,
            isAuth: true
          },
          {
            path: "alex",
            fullPath: '/user/alex',
            element: <Alex />,
            isAuth: true
          },
        ]
      }
    ],
    isAuth: true
  },
  {
    path: "/login",
    fullPath: "/login",
    element: <Login />,
    isAuth: false,
  },
  {
    path: "/register",
    fullPath: "/register",
    element: <Register />,
    isAuth: false,
  },
  {
    path: "*",
    fullPath: "*",
    element: <NotFound />,
    isAuth: false,
  },
];

export default router;

