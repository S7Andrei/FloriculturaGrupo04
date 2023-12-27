import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TemplateRoot from "./pages/TemplateRoot";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Register from "./pages/Register";

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

  return (
    <>
      <Header />
    </>
  );
}

export default App;
