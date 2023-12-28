import { RouterProvider, createBrowserRouter } from "react-router-dom";

import TemplateRoot from "./pages/TemplateRoot";
import Home from "./pages/Home";

import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Register from "./pages/Register";

import "./App.css";
import ProductsDetails from "./pages/ProductsDetails";
import { useEffect } from "react";
import { fetchPlantsData } from "./store/plants/plantsAction";
import { useDispatch } from "react-redux";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TemplateRoot />,

      children: [
        { index: true, element: <Home /> },
        { path: "about-us", element: <AboutUs /> },
        { path: "products", element: <Products /> },
        { path: "products/:id", element: <ProductsDetails /> },
        { path: "register", element: <Register /> },
      ],
    },
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlantsData());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
