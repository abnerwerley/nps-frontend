import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstQuestion from "../pages/FirstQuestion/index.jsx";
import NpsFinished from "../pages/NpsFinished/index.jsx";
import SecondQuestion from "../pages/SecondQuestion/index.jsx";
import ThirdQuestion from "../pages/ThirdQuestion/index.jsx";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FirstQuestion />} path="/firstQuestion" />
        <Route element={<SecondQuestion />} path="/secondQuestion" />
        <Route element={<ThirdQuestion />} path="thirdQuestion" />
        <Route element={<NpsFinished />} path="finished" />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
