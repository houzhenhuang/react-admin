// import { BrowserRouter, RouteObject, createBrowserRouter, useRoutes } from "react-router-dom";
// import AuthRoute from "../components/AuthRoute";

// import Layout from "../pages/Layout";
// import Home from "../pages/Home";
// import Login from "../pages/Login";
// import About from "../pages/About";
// import NotFound from "../pages/NotFound";
// import Blog from "../pages/Blog";

// const dynamicRouter: RouteObject[] = [
//   {
//     index: true,
//     element:  <Home />,
//   },
//   {
//     path: "blog",
//     element: <Blog />
//   },
//   {
//     path: "about",
//     element: <About />
//   },
// ];

// export {
//   dynamicRouter
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <AuthRoute><Layout /></AuthRoute>,
//     children: dynamicRouter
//   },
//   {
//     path: "login",
//     element: <Login />
//   },
//   {
//     path: "*",
//     element: <NotFound />
//   },
// ]);

// export default router;


import { BrowserRouter, RouteObject, createBrowserRouter, useRoutes } from "react-router-dom";
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

const router = [
  {
    path: "/",
    element: <AuthRoute><Layout /></AuthRoute>,
    children: [
      {
        index: true,
        path: '/',
        fullPath: '/',
        element: <Home />,
      },
      {
        path: "blog",
        fullPath: '/blog',
        element: <Blog />
      },
      {
        path: "about",
        fullPath: '/about',
        element: <About />
      },
      {
        path: "user",
        fullPath: '/user',
        children: [
          {
            path: "tom",
            fullPath: '/user/tom',
            element: <Tom />
          },
          {
            path: "bill",
            fullPath: '/user/bill',
            element: <Bill />
          },
          {
            path: "alex",
            fullPath: '/user/alex',
            element: <Alex />
          },
        ]
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "*",
    element: <NotFound />
  },
];

export default router;

