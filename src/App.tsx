import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Subscriptions from "./features/Subscriptions/Subscriptions";
import Discover from './features/Discover/Discover';
import Feed from "./components/Feed/Feed";
import MoreOnYouTube from "./features/MoreOnYouTube/MoreOnYouTube";
import {Provider} from "react-redux";
import store from './redux/store';


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header/>

                <div className="App-Content">
                    {/*main content*/}
                    <div style={{flex: 1}}>
                        <Routes>
                            <Route path="/" element={<Feed/>}/>
                            <Route path="subscriptions" element={<Subscriptions/>}/>
                            <Route path="discover" element={<Discover/>}/>
                            <Route path="more" element={<MoreOnYouTube/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </Provider>

    );
}

export default App;
