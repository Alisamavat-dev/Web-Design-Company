import Blog from "../../page/AllBlog/AllBlog";
import BlogPost from "../../page/BlogPost/BlogPost";
import ErrorBoundary from "../../components/Error/ErrorBoundary";

export const BlogRoutes = [
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
];
