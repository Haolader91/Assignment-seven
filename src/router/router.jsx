import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import Stats from "../pages/Stats";
import Timeline from "../pages/Timeline";
import FriendsDetails from "../pages/FriendsDetails";
import Error from "../pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
      {
        path: "/friend/:id",
        element: <FriendsDetails />,
      },
    ],
    errorElement: <Error />,
  },
]);
