import React, {useState} from "react";
import "../../Styles/Player/Body.css";
import Header from "./Header.jsx";
import { useDataLayerValue } from "../../DataLayer/DataLayer.jsx";
import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import SongRow from "./SongRow.jsx";
import 'animate.css/animate.min.css'

function Body({ spotify }) {
  const [{ current_playlist, current_track }, dispatch] = useDataLayerValue();

  const [slideShow, setSlideShow] = useState(false)
 
  const htmlData = () => {
    return (
      <>
         <div className="slider-container">
                <div className="sliderHeader">Create Lead</div>
                <div className="sliderBody">
                    <div className="sliderLeftBox">
                      Hello World
                    </div>
                    <div className="sliderRightBox">
                      Right Box
                    </div>
                </div>
                <div className="sliderFooter">
                <button className="btn btn-primary"
                          onClick={() => setSlideShow(false)}>Cancel</button>
                </div>
            </div>
        </>
 
    )
  }
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img src={current_playlist?.images[0]?.url} alt="" />
        <div className="body_infoText">
          <b>PLAYLIST</b>
          <h2>{current_playlist?.name}</h2>
          <p>{current_playlist?.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilled className="body_shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {/* Songs */}
        {current_playlist?.tracks.items.map((item, index) => {
          return <SongRow key={index} track={item.track} spotify={spotify} />;
        })}
      </div>
    </div>
  );
}

export default Body;
