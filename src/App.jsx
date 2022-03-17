// app imports
import React, { Component, useEffect, useState } from 'react';
// import './App.css';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

// component imports
import Login from "./components/Login/login";
import About from "./components/About/about";
import CollectionMapper from "./components/Collection/CollectionMapper";



// browser router import
import {
    BrowserRouter,
    Routes,
    Route,
    Link,

} from "react-router-dom"
import ListPrinter from './components/ListPrinter';
import CollectionItem from './components/CollectionItem';
import CollectionItemName from './components/CollectionItemName';
import CollectionItemNum from './components/CollectionItemNum';
import CollectionItemCat from './components/CollectionItemCat';





const App = () => {
    const [items, setItems] = useState([])
    const [users, setUsers] = useState([])
    const userId = '62294a50f14944cdb3bef377'
    // change to decruped ID later

    useEffect (()=>{
        axios.get(`http://localhost:5000/api/items/${userId}/collectionItems`).then (res => {setItems(res.data)})
        axios.get('http://localhost:5000/api/users').then (res => {setUsers(res.data)})
        console.log(items)
    }, [])

    return ( 
            // <BrowserRouter>
            //     Hello World!
                <div>
                    <h1>My Stuff here!</h1>
                    <CollectionMapper itemList = {items} /> 
                    <ListPrinter items = {items} resourceName1="item" resourceName2="item" resourceName3="item" itemComponent1={CollectionItemName} itemComponent2={CollectionItemCat} itemComponent3={CollectionItemNum}/>

                    
                </div>
            // </BrowserRouter> 
    );
}
 
export default App;


                                //  <Routes>
                                //     <Route exact path="/" element={<Collection item = {items} />} />
                                //     <Route exact path="/" element={<About  />} />
                                //     <Route exact path="/" element={<Photos  />} />
                                //     <Route exact path="*" element={<Past  />} />
                                //     <Route exact path="*" element={<Future  />} />
                                // </Routes> 
