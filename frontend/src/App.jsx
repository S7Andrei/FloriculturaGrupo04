import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TemplateRoot from "./pages/TemplateRoot";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Register from "./pages/Register";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import fetchPlantsData from "./store/plants/plantsAction";

let isInitial = true;

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
  const plants = useSelector((state) => state.plant);

  useEffect(() => {
    dispatch(fetchPlantsData());
    isInitial = false;
  }, [dispatch]);

  console.log(plants);

  return (
    <>
      <Header />

      <Register />
      {/* {!isInitial &&
        plants.plants.map((plantinhadobem) => {
          <p>{plantinhadobem.plantName}</p>;
        })} */}

      {/*<Footer />*/}
    </>
  );
}

export default App;
