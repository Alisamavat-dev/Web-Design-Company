import { createBrowserRouter } from "react-router-dom";
import Home from "../../page/Home/Home";
import ErrorBoundary from "../../components/Error/ErrorBoundary";
import ManageLayout from "../../page/admin/admin";

import Blog from "../../components/Home/Blog/AllBlog/AllBlog";
import BlogPost from "../Home/Blog/BlogPost/BlogPost";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/blog",
    element: <Blog />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/blog/:id",
    element: <BlogPost />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/manage",
    element: <ManageLayout />,
    errorElement: <ErrorBoundary />,
    children: [],
  },
]);
