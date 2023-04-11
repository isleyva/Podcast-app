import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import DataContext from "../../Context/dataContext";
import PodcastCard from "../../components/PodcastCard/PodcastCard";
import PodcastEpisodes from "../../components/PodcastEpisodes/PodcastEpisodes";
import "./PodcastPage.css";

function PodcastPage() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="PodcastPage_container">
      <PodcastCard />
      <PodcastEpisodes />
    </div>
  );
}

export default PodcastPage;

//to do
//1. organixar llamadas de forma coherente
//2. reciclar datos de locale storage
//3. pagina 3
