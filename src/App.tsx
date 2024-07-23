import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import AuthLayout from './layouts/AuthLayout/AuthLayout';
// import Login from './pages/Auth/Login/Login';
// import Error404 from './pages/ErrorPages/Error404';

// const LoginPage = AuthLayout({ component: Login })

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <LoginPage />,
  // },
  // {
  //   path: "/login",
  //   element: <LoginPage />
  // },
  // {
  //   path: "*",
  //   element: <Error404 />,
  // },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
