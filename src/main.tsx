import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root.tsx";
import ErrorPage from "./error-page.tsx";
import EcoloCrimes from "./routes/ecolo-crimes.tsx";

const router = createBrowserRouter([
  {
    path: "/puyo-gateway/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/puyo-gateway/ecolo-crimes/:dumbassId",
        element: <EcoloCrimes />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
