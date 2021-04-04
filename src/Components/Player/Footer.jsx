import React, { useEffect } from "react";
import "../../Styles/Player/Footer.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Slider } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { useDataLayerValue } from "../../DataLayer/DataLayer.jsx";
import SpotifyPlayer from '../SpotifyPlayer';

function Footer({ spotify }) {
  const [{ current_track }, dispatch] = useDataLayerValue();

  // useEffect(() => {
  //   if (current_track) 
  //     spotify.Play(current_track.id);
  // }, [current_track]);

  const size = {
    width: '100%',
    height: 300,
  };
  const view = 'list'; // or 'coverart'
  const theme = 'black'; // or 'white'

  return (
    <div className="footer">
      {/* {current_track && (
        <>
          <div className="footer_left">
            <img
              src={current_track?.album?.images[0]?.url}
              alt=""
              className="footer_albumLogo"
            />
            <div className="footer_songInfo">
              <h4>{current_track.name}</h4>
              <p>
                {current_track.artists?.map((artist) => artist.name).join(", ")}
              </p>
            </div>
          </div>
          <div className="footer_center">
            <ShuffleIcon className="footer_green" />
            <SkipPreviousIcon className="footer_icon" />
            <PlayCircleFilledIcon
              fontSize="large"
              className="footer_playIcon footer_icon"
            />
            <SkipNextIcon className="footer_icon" />
            <RepeatIcon className="footer_green" />
          </div>
          <div className="footer_right">
            <Grid container spacing={2}>
              <Grid item>
                <PlaylistPlayIcon />
              </Grid>
              <Grid item>
                <VolumeDownIcon />
              </Grid>
              <Grid item xs>
                <Slider />
              </Grid>
            </Grid>
          </div>
        </>
      )} */}
      <SpotifyPlayer
        uri={current_track?.uri}
        size={size}
        view={view}
        theme={theme}
      />
    </div>
  );
}

export default Footer;
