import {
  RouterProvider,
  RouterProviderProps,
  createBrowserRouter,
} from "react-router-dom"
import React, { Suspense, lazy } from "react"

const Home = lazy(() => import("./features/home/Home"))

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "*",
    element: <>404 Not Found</>,
  },
])

const Routes: React.FC = () => {
  return (
    <Suspense fallback="...Loading">
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default Routes
