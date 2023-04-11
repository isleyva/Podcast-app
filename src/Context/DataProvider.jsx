import React, { useState, useEffect } from "react";
import DataContext from "./dataContext";
import axios from "axios";
import { useParams } from "react-router-dom";

const DataProvider = ({ children }) => {
  //The 100 podcast fetch
  const [podcast, setPodcast] = useState([]);
  const [loading, setLoading] = useState(false);
  // Api call and Localstorage function
  const podcastData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
      );
      setPodcast(response.data.feed.entry);
      setLoading(false);
      localStorage.setItem("data", JSON.stringify(response.data.feed.entry));
      localStorage.setItem("lastUpdated", new Date().getTime());
    } catch (error) {
      console.log("error");
      setLoading(false);
    }
    // Check 1 Day for refetch.
    const lastUpdated = localStorage.getItem("lastUpdated");
    const storedData = localStorage.getItem("data");

    if (
      storedData &&
      lastUpdated &&
      new Date().getTime() - lastUpdated < 86400000
    ) {
      setPodcast(JSON.parse(storedData));
    } else {
      podcastData();
    }
  };

  useEffect(() => {
    podcastData();
  }, []);

  // The 20 episodes fetch
  const [podcastEpisodes, setPodcastEpisodes] = useState([]);
  const { podcastId } = useParams();
  const url = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`;
  const EpisodesData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      console.log(response.data.results);
      setLoading(false);
      setPodcastEpisodes(response.data.results);

      localStorage.setItem(
        "EpisodeData",
        JSON.stringify(response.data.results)
      );
      localStorage.setItem("lastUpdated2", new Date().getTime());
    } catch (error) {
      console.log("error");
      setLoading(false);
    }
    const lastUpdated = localStorage.getItem("lastUpdated");
    const storedData = localStorage.getItem("EpisodeData");

    if (
      storedData &&
      lastUpdated &&
      new Date().getTime() - lastUpdated < 86400000
    ) {
      setPodcastEpisodes(JSON.parse(storedData));
    } else {
      EpisodesData();
    }
  };
  useEffect(() => {
    EpisodesData();
  }, [podcastId]);
  return (
    <DataContext.Provider
      value={{
        podcastEpisodes,
        podcast,
        loading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
