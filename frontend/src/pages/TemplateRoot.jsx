import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useDispatch } from "react-redux";
import { plantsActions } from "../store/plants/plantsSlice";
import { useEffect } from "react";

function TemplateRoot() {
  const data = useLoaderData();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(plantsActions.handleGetPlants(data));
  }, [dispatch, data]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default TemplateRoot;
