import ManageLayout from "../../page/admin/admin";
import ErrorBoundary from "../../components/Error/ErrorBoundary";

export const AdminRoutes = [
  {
    path: "/manage",
    element: <ManageLayout />,
    errorElement: <ErrorBoundary />,
    children: [],
  },
];
