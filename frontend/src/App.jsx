import { RouterProvider, createBrowserRouter } from "react-router-dom";

import TemplateRoot from "./pages/TemplateRoot";
import Home from "./pages/Home";

import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products/Products";
import Register from "./pages/Register";

import "./App.css";
import ProductsDetails from "./pages/ProductsDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TemplateRoot />,
      loader: async () => {
        const fetchData = async () => {
          const response = await fetch("http://localhost:3000/plants");
          const data = await response.json();
          return data;
        };

        const plantData = await fetchData();
        return plantData;
      },
      children: [
        { index: true, element: <Home /> },
        { path: "about-us", element: <AboutUs /> },
        { path: "products", element: <Products /> },
        { path: "products/:id", element: <ProductsDetails /> },
        { path: "register", element: <Register /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
