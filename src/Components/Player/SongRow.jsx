import React from "react";
import "../../Styles/Player/SongRow.css";
import { useDataLayerValue } from "../../DataLayer/DataLayer.jsx";

function SongRow({ track, spotify }) {
  const [{}, dispatch] = useDataLayerValue();
  const setCurrentSong = (trackId) => {
    spotify.getTrack(trackId).then((response) => {
      dispatch({
        type: "SET_CURRENT_TRACK",
        current_track: response,
      });
    });
  };
  return (
    <div
      className="songRow"
      onClick={() => {
        setCurrentSong(track.id);
      }}
    >
      <img src={track.album.images[0].url} alt="" className="songRow_album" />
      <div className="songRow_info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
