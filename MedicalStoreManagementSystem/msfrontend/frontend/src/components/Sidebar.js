import React from 'react';
import usericon from 'adminbsb-materialdesign/images/user.png';
import Config from "../utils/Config";
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
    state ={
        defaultClass: "btn-group user-helper-dropdown",

    };
    constructor(props){
        super(props) 
        this.divref=React.createRef();
        this.divref2=React.createRef();
    }
    componentWillMount() {
        document.addEventListener("mousedown", this.handleMouseClick, false);

    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleMouseClick, false);
        
    }
    handleMouseClick=(events) =>{
        console.log("Click Element")
        if(events.target==this.divref.current || events.target === this.divref2.current){
            return;

        }else{
            console.log("Click Outside")
            this.setState({defaultClass: "btn-group user-helper-dropdown"});
        }
    }
    showLogoutMenu = () => {
        if(this.state.defaultClass == "btn-group user-helper-dropdown"){
            this.setState({defaultClass: "btn-group user-helper-dropdown open"});
        }
        else{
            this.setState({defaultClass: "btn-group user-helper-dropdown"});
        }
    };
  render(){
    return<section>
    
    <aside id="leftsidebar" className="sidebar">
        
        <div className="user-info">
            <div className="image">
                <img src={usericon} width="48" height="48" alt="User"/>
            </div>
            <div className="info-container">
                <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">John Doe</div>
                <div className="email">john.doe@example.com</div>
                <div className={this.state.defaultClass}>
                    <i className="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" onClick={this.showLogoutMenu}ref={this.divref}
                    >keyboard_arrow_down</i>
                    <ul className="dropdown-menu pull-right">                   
                        
                        <li><a href={Config.logoutPageUrl} className=" waves-effect waves-block"><i className="material-icons"ref={this.divref2}>input</i>Sign Out</a></li>
                    </ul>
                </div>
            </div>
        </div>        
        
        <div className="menu">
            <div 
            className="slimScrollDiv" 
            style={{position: "relative", 
            overflow: "hidden", 
            width: "auto",
            }}>
                <ul 
                className="list" 
                style={{ overflow: "hidden", width: "auto"}}
                >

                { Config.sidebarItem.map(
                    (item) => 
                    <li 
                    // key={item.index}
                    className={
                        item.index == this.props.activepage ? "active" : ""
                    }
                >

                <Link 
                    to={item.url}
                    className="toggled waves-effect waves-block"
                >
                    <i className="material-icons">{item.icons}</i>
                    <span>{item.title}</span>
                </Link>
            </li>
            )}       
            </ul>
            <div className="slimScrollBar" 
            style={{ 
                background: "rgba(0, 0, 0, 0.5)",
                width: "4px", 
                position: "absolute",
                top: "0px", 
                opacity: "0.4",
                display: "block", 
                borderRadius : "0px" , 
                zIndex: "99", 
                right: "1px", 
                height: "30px"
            }}
            ></div>
            <div 
            className="slimScrollRail" 
            style={{ 
                width: "4px", 
                height: "100", 
                position: "absolute", 
                top: "0px", 
                display: "none", 
                borderRadius: "0px", 
                background: "rgb(51, 51, 51)", 
                opacity: "0.2", 
                zIndex: "90", 
                right: "1px"
            }}                  
            ></div>
            </div>
        </div>
        <div className="legal">
            <div className="copyright">
                © 2021 - 2031
                <a href="#">Jopap-Systems</a>.
            </div>
            <div className="version">
                <b>Version: </b> 1.0.0
            </div>
        </div>
    </aside>
</section>

  }
}

export default Sidebar
