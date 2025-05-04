import Home from "../../page/Home/Home";
import ErrorBoundary from "../../components/Error/ErrorBoundary";

export const HomeRoutes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
];
