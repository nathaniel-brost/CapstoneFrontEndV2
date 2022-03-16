import React from "react";


const Collection = (item) => {
    const {itemName, category, quantityOwned} = item

    return (
        <div>
            <h2>My Collection</h2>
            <h2>{itemName}</h2>
            <h2>{category}</h2>
            <h2>{quantityOwned}</h2>
        </div>
    )
}

export default Collection