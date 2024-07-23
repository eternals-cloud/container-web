import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Auth/Login/Login";
import Design from "./pages/Design/Design";
import Error404 from "./pages/ErrorPages/Error404/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "design",
    element: <Design />
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
