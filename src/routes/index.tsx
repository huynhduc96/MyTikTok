import { Fragment } from "react";
import { HeaderOnly } from "~/components/Layout";
import Following from "~/pages/Following";
import Home from "~/pages/Home";

interface pathType {
  path: string;
  component: () => JSX.Element;
  layout?: () => JSX.Element;
}

//Public routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/upload", component: Following, layout: HeaderOnly },
  { path: "/upload2", component: Following, layout: Fragment },
] as pathType[];

export { publicRoutes };
