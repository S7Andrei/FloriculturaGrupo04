import { Outlet } from "react-router-dom";

function TemplateRoot() {
  return (
    <>
      <h1>Template</h1>
      <Outlet />
    </>
  );
}

export default TemplateRoot;
