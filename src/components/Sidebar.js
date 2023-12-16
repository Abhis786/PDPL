import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col shadow m-2 p-2 w-44 ">  
      <div className=" m-2 p-2">
      <ul>
       <Link to='/'> <li className=" m-1 p-2">Home</li></Link>
        <li className=" m-1 p-2">Shorts</li>
        <li className=" m-1 p-2">Subscription</li>
        <li className=" m-1 p-2">Library</li>
        <li className=" m-1 p-2">History</li>
        <li className=" m-1 p-2">Watch Later</li>
      </ul>
    </div>
    </div>

  );
};

export default Sidebar;
