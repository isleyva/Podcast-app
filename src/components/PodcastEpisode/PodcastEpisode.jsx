import React from "react";
import "./PodcastEpisode.css";

function PodcastEpisode({ item }) {
  const totalSeconds = Math.floor(item.trackTimeMillis / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  let timeString = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  if (hours > 0) {
    timeString = `${hours.toString().padStart(2, "0")}:${timeString}`;
  }
  return (
    <tr key={item.id} className="PodcastEpisode_container">
      <td className="PodcastEpisode_title">{item.trackName} </td>
      <td className="PodcastEpisode_date">
        {item.releaseDate.slice(0, 10).replaceAll("-", "/")}{" "}
      </td>
      <td className="PodcastEpisode_time">{timeString}</td>
    </tr>
  );
}

export default PodcastEpisode;
