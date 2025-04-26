import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import ErrorBoundary from "../components/Error/ErrorBoundary";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
]);

export default Router;
