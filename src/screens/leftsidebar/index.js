import React,{Component} from "react";
import Statue from '../../assets/statue.jpg'
import Activeuser from '../../assets/online-newprofile.png'

import Worldmap from '../../assets/new_blackworldbg.png'
import { withRouter } from 'react-router-dom/cjs/react-router-dom'
import './Left.css'



class  Leftside extends Component{
 


moveDash= () =>{
   this.props.history.push({pathname: "/"})
}
 moveFlightpage= () =>{
    this.props.history.push({pathname:"/flights"})
}

 moveWallet= () =>{
    this.props.history.push({pathname:"/wallet"})
}

 moveReport= () =>{
    this.props.history.push({pathname:"/reports"})
}
 moveStatistics= () =>{
    this.props.history.push({pathname:"/statistics"})
}
 moveSettings= () =>{
    this.props.history.push({pathname:"/settings"})
}


render(){
    return(
        <div className="left_side_box">
            <div><img src={Statue} alt="lll" className="statue_image" /></div>
            <h3 style={{color:"white",fontSize:"large",marginLeft:"4rem"}}>ALEX JOHNSON</h3>
            <div className="pages">
            <div className="dash_board" onClick={() => this.moveDash()} >DASHBOARD</div>
            <div className="flights" onClick={() => this.moveFlightpage()}>FLIGHTS</div>
            <div className="wallet" onClick={() => this.moveWallet()}>WALLET</div>
            <div className="reports" onClick={() => this.moveReport()}>REPORTS</div>
            <div className="statistics" onClick={() => this.moveStatistics()}>STATISTICS</div>
            <div className="settings" onClick={() => this.moveSettings()}>SETTINGS</div>
            </div>
            <div>
            <p style={{color:"white",margin:"1rem",marginLeft:"3rem"}}>ACTIVE USERS</p>
                <img src={Activeuser} alt="ooo"  className="active_image_user"/></div>
                <div>
                    <img src={Worldmap} alt="ppp" className="world_map" />
                </div>
                <div className="more">
                    <button className="more_plus" >More+</button>
                </div>
        </div>
    )
}
}
export default withRouter(Leftside);