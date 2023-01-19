import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstQuestion from "../FirstQuestion/index.jsx";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FirstQuestion />} path="/firstQuestion" />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
