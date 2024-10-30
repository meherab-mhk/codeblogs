import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./layout/Layout";
import BlogDetails from "./pages/BlogDetails";
import Blogs from "./pages/Blogs";
import Bookmarks from "./pages/Bookmarks";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("https://dev.to/api/articles"),
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
    <Toaster></Toaster>
  </StrictMode>
);
