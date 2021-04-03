import React from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import './App.css';

function App() {
  return (
    <div className="app">
      {/* <h1>Hello Everyone</h1> */}
        
        <Header/>
        <div className="app__page">
       <Sidebar/> 
       <RecommendedVideos/>
       </div>
    </div>
  );
}

export default App;
