import { useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import AllPodcastPage from "./routes/AllPodcastPage";
import { Route, Routes } from "react-router-dom";
import DataContext from "./Context/dataContext";
import { useEffect } from "react";
import PodcastPage from "./routes/PodcastPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllPodcastPage />} />
        <Route path="/podcast/:podcastId" element={<PodcastPage />} />
      </Routes>
    </>
  );
}

export default App;
