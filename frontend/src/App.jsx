//Componentes
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Products from "./pages/Products/Products";
import Register from "./pages/Register/Register";
import SignUp from "./pages/SignUp/SignUp";
import NotFound from "./pages/NotFound/NotFound";
import TemplateRoot from "./pages/TemplateRoot";
import ProductsDetails from "./pages/ProductsDetails/ProductsDetails";
import Login from "./pages/Login/Login";

//Estilos
import "./App.css";

//Libs
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { getPlants } from "./store/plants/plantsAction";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.login.isLogado);
  const currentLoginStorage = localStorage.getItem('isLogado');

  console.log(isAuthenticated);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <TemplateRoot />,
      loader: getPlants,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "about-us", element: <AboutUs /> },
        {
          path: "products",
          element: <Products listagemTotal={true} />,
        },
        {
          path: "products/:id",
          element: <ProductsDetails />,
        },
        {
          path: "register",
          element: currentLoginStorage === 'true' ? (
            <Register />
          ) : (
            <div className="registerOff">
              <Login />
            </div>
          ),
        },
        { path: "sign-up", element: <SignUp /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
