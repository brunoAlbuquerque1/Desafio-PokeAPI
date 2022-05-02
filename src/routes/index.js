import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import Favorites from "../pages/Favorites/favoritePage";
import DefautLayout from "../components/DefaultLayout/defaultLayout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <DefautLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </DefautLayout>
    </BrowserRouter>
  );
}

export default AppRoutes;
