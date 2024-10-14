import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Subscriptions from "./features/Subscriptions/Subscriptions";
import Discover from './features/Discover/Discover';
import Home from "./components/Home/Home";
import MoreOnYouTube from "./features/MoreOnYouTube/MoreOnYouTube";


function App() {
    return (
        <div className="App">
            <Header/>

            <div className="App-Content">

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="subscriptions" element={<Subscriptions/>}/>
                    <Route path="discover" element={<Discover/>}/>
                    <Route path="more" element={<MoreOnYouTube/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
