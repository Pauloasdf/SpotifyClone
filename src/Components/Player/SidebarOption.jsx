import React from "react";
import "../../Styles/Player/SidebarOption.css";
import { useDataLayerValue } from "../../DataLayer/DataLayer.jsx";

function SidebarOption({ title, Icon, playlistId, spotify }) {
  const [{}, dispatch] = useDataLayerValue();

  const setCurrentPlaylist = (playlistId) => {
    spotify.getPlaylist(playlistId).then((response) => {
      dispatch({
        type: "SET_CURRENT_PLAYLIST",
        current_playlist: response,
      });
    });
  };

  return (
    <div
      className="sidebarOption"
      onClick={() => {
        setCurrentPlaylist(playlistId);
      }}
    >
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOption;
