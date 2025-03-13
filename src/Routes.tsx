import {
  RouterProvider,
  RouterProviderProps,
  createBrowserRouter,
} from "react-router-dom";
import React, { Suspense, lazy } from "react";
import DefaultPage from "./features/shared/components/defaultPage/DefaultPage";

const Home = lazy(() => import("./features/home/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "*",
    element: <>404 Not Found</>,
  },
]);

const Routes: React.FC = () => {
  return (
    <Suspense fallback="...Loading">
      <DefaultPage>
        <RouterProvider router={router} />
      </DefaultPage>
    </Suspense>
  );
};

export default Routes;
