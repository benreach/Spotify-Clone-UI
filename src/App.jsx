import { Route, Routes } from "react-router";
import MainLayout from "./Layouts/MainLayout";
import Homepage from "./routes/Homepage";
import ArtistPage from "./routes/ArtistPage";
import AlbumPage from "./routes/AlbumPage";
import PlayListPage from "./routes/PlayListPage";
import CollectionPage from "./routes/CollectionPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/artist/:id" element={<ArtistPage />}/>
        <Route path="/album/:id" element={<AlbumPage />}/>
        <Route path="/playlist/:id" element={<PlayListPage />}/>
        <Route path="/collection/:id" element={<CollectionPage />}/>
      </Route>
    </Routes>
  );
}

export default App;
