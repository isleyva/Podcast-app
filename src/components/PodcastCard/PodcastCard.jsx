import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../../Context/dataContext";
import "./PodcastCard.css";

function PodcastCard() {
  const { podcastId } = useParams();
  const { podcast } = useContext(DataContext);
  const RequiredPodcast = podcast.find(
    (item) => item.id.attributes["im:id"] === podcastId
  );

  return (
    <div>
      {RequiredPodcast ? (
        <div className="PodcastCard_container">
          <img
            className="PodcastCard_img"
            src={RequiredPodcast["im:image"][2].label}
            alt="podcast cover"
          />
          <h1 className="PodcastCard_title">
            {RequiredPodcast["im:name"].label}
            <p className="PodcastCard_artist">
              by {RequiredPodcast["im:artist"].label}
            </p>
          </h1>
          <p className="PodcastCard_description"> Description:</p>
          <p className="PodcastCard_summary">{RequiredPodcast.summary.label}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default PodcastCard;
