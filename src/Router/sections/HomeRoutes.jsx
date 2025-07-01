import Home from "../../page/Home/Home";
import ErrorBoundary from "../../components/Error/ErrorBoundary";
import Contact from "../../page/Contact/Contact";
import Help from "../../page/Help/Help";
import Portfolio from "../../page/Portfolio/Portfolio";
import Pricing from "../../page/Pricing/Pricing";
import Developers from "../../page/Developers/Developers";
import SubmitProject from "../../page/SubmitProject/SubmitProject";

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
  {
    path: "/portfolio",
    element: <Portfolio />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/Pricing",
    element: <Pricing />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/Developers",
    element: <Developers />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/Submit-Project",
    element: <SubmitProject />,
    errorElement: <ErrorBoundary />,
  },
];
