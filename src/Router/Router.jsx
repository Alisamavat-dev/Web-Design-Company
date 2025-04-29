import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import ErrorBoundary from "../components/Error/ErrorBoundary";
import ManageLayout from "../page/admin/admin";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/manage",
    element: <ManageLayout />,
    errorElement: <ErrorBoundary />,
    children: [

    ],
  },
]);

export default Router;
