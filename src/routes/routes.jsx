import { createBrowserRouter } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Homepage from "../pages/Homepage";
import Timeline from "../pages/Timeline";
import ErrorElement from "./Errorelement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
    ],
    errorElement: <ErrorElement/>
  },
]);
