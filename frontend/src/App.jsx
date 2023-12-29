import { RouterProvider, createBrowserRouter } from "react-router-dom";

import TemplateRoot from "./pages/TemplateRoot";
import Home from "./pages/Home";

import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products/Products";
import Register from "./pages/Register";

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
      children: [
        { index: true, element: <Home /> },
        { path: "about-us", element: <AboutUs /> },
        { path: "products", element: <Products listagemTotal={true}  /> },
        { path: "products/:id", element: <ProductsDetails /> },
        { path: "register", element: <Register /> },
      ],
    },

    { path: "*", element: <NotFound /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
