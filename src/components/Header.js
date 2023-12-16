import React from "react";
import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../constants/url";
const Header = () => {
  const [showmenu, setShowmenu] = useState(true);
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showsuggestions, setshowsuggestions] = useState(false);
  // console.log(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSearchResults();
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const fetchSearchResults = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await response.json();
    setsuggestions(data[1]);
    console.log(data);
  };
  const handleClick = () => {
    setShowmenu(!showmenu);
  };
  return (
    <div className="grid grid-flow-col shadow-lg p-2 m-1">
      <div className="flex col-span-1">
        <img
          className="h-10"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="click"
          onClick={() => handleClick}
        />
        <img
          className="h-10"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          alt="youtube"
        />
      </div>
      <div className="col-span-10  ">
        <div className=" ">
          <input
            type="text"
            className="w-1/2 border border-gray-400 rounded-l-full p-2 h-6"
            value={searchQuery}
            onChange={(e) => setsearchQuery(e.target.value)}
            onFocus={() => setshowsuggestions(true)}
            onBlur={() => setshowsuggestions(false)}
          />
          <button
            className=" bg-gray-200 rounded-r-full w-14
         h-6 fill"
          >
            🔍
          </button>
        </div>
        {showsuggestions && (
          <div className="p-1 m-1 rounded fixed w-1/3 bg-white z-10">
            <ul>
              {suggestions.map((item) => (
                <li className="p-0.5 m-0.5">🔍 {item}</li>
              ))}
              {/* <li className="p-0.5 m-0.5">🔍 {searchQuery}</li> */}
            </ul>
          </div>
        )}
      </div>

      <div className="flex col-span-1">
        <img
          className="h-6"
          src="https://cdn-icons-png.flaticon.com/512/61/61205.png"
          alt="account"
        />
      </div>
    </div>
  );
};

export default Header;
