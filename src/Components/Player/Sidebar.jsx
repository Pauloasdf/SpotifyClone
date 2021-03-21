import React from "react";
import "../../Styles/Player/Sidebar.css";
import SidebarOption from "./SidebarOption";
//Icons
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../../DataLayer/DataLayer.jsx";

function Sidebar({ spotify }) {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist, index) => {
        return (
          <SidebarOption
            key={index}
            title={playlist.name}
            playlistId={playlist.id}
            spotify={spotify}
          />
        );
      })}
    </div>
  );
}

export default Sidebar;
