import Navbar from "./components/Navbar/Navbar";
import AllPodcastPage from "./routes/AllPodcastPage";
import { Route, Routes } from "react-router-dom";
import PodcastPage from "./routes/PodcastPage/PodcastPage";

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
