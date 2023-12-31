import { RouterProvider, createBrowserRouter } from "react-router-dom";

import TemplateRoot from "./pages/TemplateRoot";
import Home from "./pages/Home/Home";

import AboutUs from "./pages/AboutUs/AboutUs";
import Products from "./pages/Products/Products";
import Register from "./pages/Register/Register";

import NotFound from "./pages/NotFound";

import "./App.css";
import ProductsDetails from "./pages/ProductsDetails/ProductsDetails";
import { getPlants } from "./store/plants/plantsAction";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TemplateRoot />,
      loader: getPlants,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "about-us", element: <AboutUs /> },
        { path: "products", element: <Products listagemTotal={true} /> },
        { path: "products/:id", element: <ProductsDetails /> },
        { path: "register", element: <Register /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
