import React from "react";
import url from "../constants/url";

const Card = ({ info }) => {
  // console.log(info?.snippet?.thumbnails?.high?.url);
  // const title= info.snippet.channelTitle;
  // console.log()

  // const {snippet,statistics}=undefined||info;
  // // // console.log( info.snippet.channelTitle);
  // const {channelTitle,title,thumbnails}=undefined||snippet;
  return (
    <div className=" border border-solid-gray-800 p-4 m-2 box-content h-70 w-60 shadow-lg">
      <img
        src={info?.snippet?.thumbnails?.high?.url}
        alt=""
        className="w-60 h-40 rounded-lg"
      />
      <ul>
        <li className="">{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        {/* <li>Rohit</li>  sssdsdsdfdsf */}
        <li>{info?.statistics?.viewCount}</li>
      </ul>
    </div>
  );
};

export default Card;
