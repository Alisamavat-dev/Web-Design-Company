// Home Section
import { HomeRoutes } from "./sections/HomeRoutes.jsx";
// Blog Section
import { BlogRoutes } from "./sections/BlogRoutes.jsx";
// Admin Section
import { AdminRoutes } from "./sections/AdminRoutes.jsx";

export const routes = [...HomeRoutes, ...BlogRoutes, ...AdminRoutes];
