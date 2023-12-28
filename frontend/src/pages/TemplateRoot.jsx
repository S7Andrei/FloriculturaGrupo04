import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useDispatch } from "react-redux";
import { plantsActions } from "../store/plants/plantsSlice";

function TemplateRoot() {
  const data = useLoaderData();
  const dispatch = useDispatch();
  dispatch(plantsActions.handleGetPlants(data));

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default TemplateRoot;
