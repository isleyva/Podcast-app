import { useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import PodcastPage from "./routes/PodcastPage";
import { Route, Routes } from "react-router-dom";
import DataContext from "./Context/dataContext";
import { useEffect } from "react";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PodcastPage />} />
      </Routes>
    </>
  );
}

export default App;
