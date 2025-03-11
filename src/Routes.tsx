import {
  RouterProvider,
  RouterProviderProps,
  createBrowserRouter,
} from "react-router-dom"
import React, { Suspense, lazy } from "react"

const Counter = lazy(() => import("./features/counter/Counter"))

const router = createBrowserRouter([
  {
    path: "/",
    Component: Counter,
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
