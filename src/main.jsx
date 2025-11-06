import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import OurJourney from "./pages/OurJourney";
import MemoriesPages from "./pages/MemoriesPages";
import RsvpPages from "./pages/RsvpPages";
import MemoriesDetails from "./pages/MemoriesDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
   {
    path: "/journey",
    element: <OurJourney />,
  },
  {
    path: "/memories",
    element: <MemoriesPages />,
  },
  {
    path: "/detail-memories",
    element: <MemoriesDetails />,
  },
  {
    path: "/rsvp-wishes",
    element: <RsvpPages />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
