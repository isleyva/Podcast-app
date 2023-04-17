import DataContext from "../../Context/dataContext";
import { useEffect, useContext, useState } from "react";
import "./AllPodcast.css";
import PodcastItem from "../PodcastItem/PodcastItem";

function AllPodcast() {
  const { podcast, loading } = useContext(DataContext);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchText(value);
  };

  return (
    <div className="AllPodcast_container">
      <div className="AllPodcast_search">
        <div className="AllPodcast_search_indicator">{podcast.length}</div>
        <form>
          <input
            onChange={handleSearch}
            className="AllPodcast_search_input"
            type="text"
            name="search"
            placeholder="Search for a podcast..."
          />
        </form>
      </div>
      {loading ? (
        <span className="loader"></span>
      ) : (
        <div className="AllPodcast_podcast_container">
          {podcast
            .filter((value) => {
              if (searchText === "") {
                return value;
              } else if (
                value["im:name"].label
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              ) {
                return value;
              }
            })
            .map((item, index) => {
              return <PodcastItem key={item.id + index} item={item} />;
            })}
        </div>
      )}
    </div>
  );
}

export default AllPodcast;
