import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultPage from "../pages/DefaultPage/index.jsx";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultPage />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
