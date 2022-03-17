import React from "react";
import CollectionItem from "../CollectionItem";


const CollectionMapper = ({itemList}) => {
    

    return (
        <div>
            <h1>My Collection</h1>
            <ul>
                {itemList && itemList.map(item => <li key={item._id}><CollectionItem item={item}/></li>)}
            </ul>
        </div>
    )
}

export default CollectionMapper
