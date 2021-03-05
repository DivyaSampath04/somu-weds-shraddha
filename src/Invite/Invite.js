import React from 'react';
import * as c from '../utils/config';
import './Invite.css';
import temple from '../utils/images/wed2.jpg';
import beach2 from '../utils/images/beach3.jpg'

class Invite extends React.Component{
    render(){
        return(
            <>
                <div className = 'msg-1'>
               <p className = 'title'>{c.msg.title}</p>
                <p className ='txt'>{c.msg.msg}</p>
                
                </div>
                <div className = 'msg-2'>
                    <div className = 'div-section1'>
                <p className ='txt'>{c.wedding.msg}</p>
                <a href="http://maps.google.com/?q=1200 tirupati">{c.wedding.venue}</a>
                </div>
                <img src = {temple} alt = 'temple' className = 'img'/>
                
                </div>
                <div className = 'msg-3'>
                <img src = {beach2} alt = 'beach' className = 'img'/>
                    <div className = 'div-section2'>
                <p className ='txt'>{c.wedding.msg}</p>
                <p className ='txt'>{c.wedding.venue}</p>
                </div>
                
                </div>
            </>
        )
    }
}

export default Invite;