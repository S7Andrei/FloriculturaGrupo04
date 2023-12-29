import { RouterProvider, createBrowserRouter } from "react-router-dom";

import TemplateRoot from "./pages/TemplateRoot";
import Home from "./pages/Home";

import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products/Products";
import Register from "./pages/Register";
<<<<<<< HEAD
import NotFound from "./pages/NotFound";
=======
>>>>>>> a11b1c46ad8aa249c00e965a9c38ab7cd5044c9a

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
<<<<<<< HEAD
=======
      loader: async () => {
        const fetchData = async () => {
          const response = await fetch("http://localhost:3000/plants");
          const data = await response.json();
          return data;
        };

        const plantData = await fetchData();
        return plantData;
      },
>>>>>>> a11b1c46ad8aa249c00e965a9c38ab7cd5044c9a
      children: [
        { index: true, element: <Home /> },
        { path: "about-us", element: <AboutUs /> },
        { path: "products", element: <Products /> },
        { path: "products/:id", element: <ProductsDetails /> },
        { path: "register", element: <Register /> },
      ],
    },

    { path: "*", element: <NotFound /> },
  ]);

<<<<<<< HEAD
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlantsData());
  }, [dispatch]);

=======
>>>>>>> a11b1c46ad8aa249c00e965a9c38ab7cd5044c9a
  return <RouterProvider router={router} />;
}

export default App;
