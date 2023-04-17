import React from "react";

import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PodcastEpisode from "../PodcastEpisode/PodcastEpisode";
import "./PodcastEpisodes.css";

function PodcastEpisodes() {
  const [loading, setLoading] = useState(false);
  const [podcastEpisodes, setPodcastEpisodes] = useState([]);
  const { podcastId } = useParams();
  const url = `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`;

  const EpisodesFetch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      console.log(response.data.results);
      setLoading(false);
      setPodcastEpisodes(response.data.results);

      localStorage.setItem(
        "EpisodesData",
        JSON.stringify(response.data.results)
      );
      localStorage.setItem("LastTimeFetch", new Date().getTime());
    } catch (error) {
      console.log("error");
      setLoading(false);
    }
    const LastTimeFetch = localStorage.getItem("LastTimeFetch");
    const EpisodesData = localStorage.getItem("EpisodesData");

    if (
      LastTimeFetch &&
      EpisodesData &&
      new Date().getTime() - LastTimeFetch < 86400000
    ) {
      setPodcastEpisodes(JSON.parse(EpisodesData));
    } else {
      EpisodesFetch();
    }
  };
  useEffect(() => {
    EpisodesFetch();
  }, [podcastId]);
  return (
    <div className="PodcastEpisodes_container">
      <p className="PodcastEpisodes_p">
        {loading ? (
          <span className="loader"></span>
        ) : (
          <div>Episodes: {podcastEpisodes.length}</div>
        )}
      </p>
      <table className="PodcastEpisodes_table">
        <thead>
          <tr>
            <th className="PodcastEpisodes_th">Title</th>
            <th className="PodcastEpisodes_th"> Date</th>
            <th className="PodcastEpisodes_th">Duration</th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <span className="loader"></span>
          ) : (
            podcastEpisodes.map((item) => {
              return <PodcastEpisode item={item} />;
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PodcastEpisodes;
