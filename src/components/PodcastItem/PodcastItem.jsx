import React from "react";
import "./PodcastItem.css";
import { Link } from "react-router-dom";

function PodcastItem({ item }) {
  return (
    <Link
      className="PodcastItem_Link"
      to={`/podcast/${item.id.attributes["im:id"]}`}
    >
      <div className="PodcastItem_container" key={item.id}>
        <img
          className="PodcastItem_img"
          src={item["im:image"][2].label}
          alt=""
        />
        <h3 className="PodcastItem_title">{item["im:name"].label}</h3>
        <p className="PodcastItem_artist"> Author: {item["im:artist"].label}</p>
      </div>
    </Link>
  );
}

export default PodcastItem;
