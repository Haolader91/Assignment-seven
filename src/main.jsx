import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./router/router";
import { TimelineProvider } from "./context/store";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimelineProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </TimelineProvider>
  </StrictMode>,
);
