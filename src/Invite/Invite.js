import React from "react";
import * as c from "../utils/config";
import "./Invite.css";
import temple from "../utils/images/wed2.jpg";
import beach2 from "../utils/images/beach4.jpg";

class Invite extends React.Component {
  render() {
    return (
      <>
        <div className="msg-1">
        <div className = 'title' style = {{color : '#ffb020',padding : '15px',fontWeight : 'bold'}}>{c.msg.title}</div>
            <div className="inner-div">
          <p  className="txt">{c.msg.msg}</p>
          <p  className="txt">{c.msg.msg1}</p>
          <p className="txt">{c.msg.msg2}</p>
          </div>
          
        </div>
      
        <div className="msg-2">
          <div className="div-section1">
              <p className = "title">{c.wedding.title}</p>
              <div className = 'line'></div>
            <p className="txt">{c.wedding.msg}</p>
            <p className="txt">{c.wedding.venue}</p>
            <p className="txt">{c.wedding.time}</p>
            <a href="http://maps.google.com/?q=1200 Sri Vanamamalai Mutt, Tirupati">
            <span className = 'link'>view in maps</span>
            </a>
          </div>
          <img src={temple} alt="temple" className="img" />
        </div>
        <div className="msg-3">
          <img src={beach2} alt="beach" className="img" />
          <div className="div-section2">
          <p className = "title">{c.recep.title}</p>
          <div className = 'line'></div>
            <p className="txt">{c.recep.msg}</p>
            <p className="txt">{c.recep.venue}</p>
            <p className="txt">{c.recep.time}</p>
            <a href="http://maps.google.com/?q=1200 Tamilnadu Tourism Beach Resort, Mahabalipuram">
              <span className = 'link'>view in maps</span>
            </a>
          </div>
         
        </div>
        <p className = 'credit'>Made by Divya.</p>
      </>
    );
  }
}

export default Invite;
