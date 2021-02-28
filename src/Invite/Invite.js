import React from 'react';
import * as c from '../utils/config';
import './Invite.css';
import temple from '../utils/images/temple.jpg';
import beach from '../utils/images/beach.jpg'

class Invite extends React.Component{
    render(){
        return(
            <>
                <div className = 'msg-1'>
              
                <p className ='txt'>{c.msg.msg}</p>
                
                </div>
                <div className = 'msg'>
                    <div className = 'div-section'>
                <p className ='txt'>{c.wedding.msg}</p>
                <a href="http://maps.google.com/?q=1200 tirupati">{c.wedding.venue}</a>
                </div>
                <img src = {temple} alt = 'temple' className = 'img'/>
                
                </div>
                <div className = 'msg'>
                <img src = {beach} alt = 'beach' className = 'img'/>
                    <div className = 'div-section'>
                <p className ='txt'>{c.wedding.msg}</p>
                <p className ='txt'>{c.wedding.venue}</p>
                </div>
                
                </div>
            </>
        )
    }
}

export default Invite;