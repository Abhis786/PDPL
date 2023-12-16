import React, { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import { URL } from "../constants/url";
import Tiles from "./Tiles";
import { Link } from "react-router-dom";

const VideoCard = () => {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(URL);
    const json = await data.json();
    // console.log(json.items);
    setvideos(json.items);
  };

  return (
    <div className="flex flex-col">
      <Tiles />
      <div className="flex flex-row flex-wrap">
        {videos.map((video) => (
          <Link to={"/watch?v=" + video.id}>
            <Card key={video.id} info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoCard;
