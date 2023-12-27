import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import TemplateRoot from "./pages/TemplateRoot";
import './App.css'
import Header from './components/Header/Header'

function App() {
  const router = createBrowserRouter([
    { index: true, element: <TemplateRoot /> },
  ]);

  return <><Header /></>;