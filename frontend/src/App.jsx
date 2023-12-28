import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import TemplateRoot from "./pages/TemplateRoot";
import Home from "./pages/Home";

import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Register from "./pages/Register";

import fetchPlantsData from "./store/plants/plantsAction";

import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TemplateRoot />,
      children: [
        { index: true, element: <Home /> },
        { path: "about-us", element: <AboutUs /> },
        { path: "products", element: <Products /> },
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
