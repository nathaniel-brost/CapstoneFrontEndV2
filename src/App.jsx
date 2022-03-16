// app imports
import React, { Component, useEffect, useState } from 'react';
// import './App.css';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

// component imports
import Login from "./components/Login/login";
import About from "./components/About/about";
import Collection from "./components/Collection/collection";



// browser router import
import {
    BrowserRouter,
    Routes,
    Route,
    Link,

} from "react-router-dom"





const App = () => {
    const [items, setItems] = useState([])

    useEffect (()=>{
        axios.get ('http://localhost:5000/api/items/62294a50f14944cdb3bef377/collectionItems').then (res => {setItems(res.items)})
    }, [])

    return ( 
            // <BrowserRouter>
            //     Hello World!
                <div>
                                    <Collection item = {items} />

                                {/* <Routes>
                                    <Route exact path="/" element={<Collection item = {items} />} />
                                    <Route exact path="/" element={<Login  />} />
                                    <Route exact path="/" element={<Login  />} />
                                    <Route exact path="*" element={<Login  />} />
                                </Routes> */}
                    
                </div>
            // </BrowserRouter> 
    );
}
 
export default App;


