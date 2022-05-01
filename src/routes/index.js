import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import DefautLayout from "../components/DefaultLayout/defaultLayout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <DefautLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </DefautLayout>
    </BrowserRouter>
  );
}

export default AppRoutes;
