import React from "react";
import * as c from "../utils/config";
import "./Invite.css";
import temple from "../utils/images/wed2.jpg";
import beach2 from "../utils/images/beach4.jpg";
import LocationOnIcon from "@material-ui/icons/LocationOn";
//import Zoom from 'react-reveal/Zoom';
//import Fade from 'react-reveal/Fade';

class Invite extends React.Component {
  render() {
    return (
      <>
        <div className="msg-1">
          <div className="title-main">{c.msg.title}</div>
          <div className="inner-div">
            <p className="txt" style={{ fontWeight: "bold" }}>
              {c.msg.msg}
            </p>
            <p className="txt" style={{ fontWeight: "bold" }}>
              {c.msg.msg1}
            </p>
            <p className="txt" style={{ fontWeight: "bold" }}>
              {c.msg.msg2}
            </p>
          </div>
        </div>

        <div className="msg-2">
          <div className="div-section1">
            <p className="title">{c.wedding.title}</p>
            <div className="line"></div>
            <p className="txt">{c.wedding.msg}</p>
            <p className="txt">{c.wedding.venue}</p>
            <p className="txt">{c.wedding.time}</p>
            <a href="https://www.google.com/maps/search/?api=1&query=Sri Vanamamalai Mutt, Tirupati">
              <LocationOnIcon className="loc-icon" />
              <span className="link">open in maps</span>
            </a>
          </div>
          <img src={temple} alt="temple" className="img" />
        </div>

        <div className="msg-3">
          <img src={beach2} alt="beach" className="img" />
          <div className="div-section2">
            <p className="title">{c.recep.title}</p>
            <div className="line"></div>
            <p className="txt">{c.recep.msg}</p>
            <p className="txt">{c.recep.venue}</p>
            <p className="txt">{c.recep.time}</p>
            <a href="https://www.google.com/maps/search/?api=1&query=Tamilnadu Tourism Beach Resort, Private Beach">
              <LocationOnIcon className="loc-icon" />
              <span className="link">open in maps</span>
            </a>
          </div>
        </div>

        <p className="credit">Made by Divya.</p>
      </>
    );
  }
}

export default Invite;
