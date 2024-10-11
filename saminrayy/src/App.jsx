import "./App.css";
import Home from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductItem from "./pages/ProductItem/ProductItem";
import Buy from "./pages/Buy/Buy";
import Login from "./pages/LogIn/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/product",
      element: <ProductItem />,
    },
    {
      path: "/buy",
      element: <Buy />,
    },
    {
      path:'/login',
      element:<Login/>
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
