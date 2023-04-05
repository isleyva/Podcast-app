import React, { useState, useEffect } from "react";
import DataContext from "./dataContext";
import axios from "axios";

const DataProvider = ({ children }) => {
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

  return (
    <DataContext.Provider
      value={{
        podcast,
        loading,
        podcastData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
