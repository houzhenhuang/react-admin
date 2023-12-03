import { createBrowserRouter } from "react-router-dom";
import AuthRoute from "../components/AuthRoute";

import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthRoute><Layout /></AuthRoute>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
    ]
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "*",
    element: <NotFound />
  },
]);

export default router