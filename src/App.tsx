import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Design from "./pages/Design/Design";
import Error404 from "./pages/ErrorPages/Error404/Error404";
import Home from "./pages/Home/Home";

// import AuthLayout from './layouts/AuthLayout/AuthLayout';
// import Login from './pages/Auth/Login/Login';
// import Error404 from './pages/ErrorPages/Error404';

// const LoginPage = AuthLayout({ component: Login })

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
