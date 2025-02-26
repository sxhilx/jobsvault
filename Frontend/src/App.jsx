import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import { AddJob, Dashboard, EditJob, Login, Register } from "./pages";
import ProtectedRoute from "./ProtectedRoute";
import { fetchJobs } from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
            loader: fetchJobs,
          },
          {
            path: "/add-job",
            element: <AddJob />,
          },
          {
            path: "/edit-job/:jobId",
            element: <EditJob />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
