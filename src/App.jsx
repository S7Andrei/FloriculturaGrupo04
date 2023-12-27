import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import TemplateRoot from "./pages/TemplateRoot";

function App() {
  const router = createBrowserRouter([
    { index: true, element: <TemplateRoot /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
