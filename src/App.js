import React from "react";
import AppRoutes from "./routes/index";
import { FavoriteProvider } from "./hooks/Favorites/FavoritesHook";
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
