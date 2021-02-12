import React from 'react';
import Overlay from  './Overlay';
import Navbar from  './Navbar';
import PageLoader from  './PageLoader';
import Sidebar from  './Sidebar';
import HomeComponent from  './HomeComponent';
import GoogleFontLoader from 'react-google-font-loader';
import  "adminbsb-materialdesign/css/themes/all-themes.css";

class MainComponent extends React.Component {
  render(){
    document.getElementById("root").className="theme-red"
    return<React.Fragment>
      <GoogleFontLoader
                    fonts={[
                        {
                            font: 'Roboto',
                            weights:[400, 700],
                        }                        
                    ]}
                    subsets={['latin','cyrillic-ext']}
            />
            <GoogleFontLoader
                    fonts={[
                        {
                            font: 'Material+Icons',
                            
                        }                        
                    ]}
                   
            />
      <Overlay/>
      <Navbar/>
      <Sidebar/>
      <PageLoader/>
      <HomeComponent/>
    </React.Fragment>;
  }
}

export default MainComponent