import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TemplateRoot from "./pages/TemplateRoot";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TemplateRoot />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);

  return (
    <>
      <Header />
      <Footer />
    </>
    
  );
}

export default App;
