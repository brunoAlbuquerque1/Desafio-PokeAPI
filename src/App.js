import React from "react";
import AppRoutes from "./routes/index";
import { FavoriteProvider } from "./Context/Favorite/contextFavorite";
import GlobalStyled from "./styles/GlobalStyled";

function App() {
  return (
    <>
      <FavoriteProvider>
        <GlobalStyled />
        <AppRoutes />
      </FavoriteProvider>
    </>
  );
}

export default App;
