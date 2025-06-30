import Home from "../../page/Home/Home";
import ErrorBoundary from "../../components/Error/ErrorBoundary";
import Contact from "../../page/Contact/Contact";
import Help from "../../page/Help/Help";

export const HomeRoutes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/help",
    element: <Help />,
    errorElement: <ErrorBoundary />,
  },
];
