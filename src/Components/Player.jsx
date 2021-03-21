import React from "react";
import "../Styles/Player.css";
import SideBar from "./Player/Sidebar.jsx";
import Footer from "./Player/Footer.jsx";
import Body from "./Player/Body.jsx";

export default function Player({ spotify }) {
  return (
    <div className="Player">
      <div className="player_body">
        <SideBar spotify={spotify} />
        <br></br>
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}
