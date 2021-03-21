import './App.css';
import React from 'react';
import "./Styles/Login.css";
import Login from "./Components/Login.jsx";
import Player from "./Components/Player.jsx";
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './APIs/spotify';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer/DataLayer.jsx";

const spotify = new SpotifyWebApi();

function App() {

  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token
    window.location.hash = "";

    if (_token) {
      dispatch({
        type: "SET_TOKEN", token: _token
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then(_user => dispatch({
        type: "SET_USER", user: _user
      }));
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS", playlists: playlists
        });
      });
      spotify.getPlaylist("37i9dQZEVXcUbaVmc96CND").then((response) => {
        dispatch({
          type: "SET_CURRENT_PLAYLIST", current_playlist: response
        });
      });
    }

  }, []);

  return (
    <div className="App">{token ? <Player spotify={spotify} /> : <Login />}</div>
  );
}

export default App;
