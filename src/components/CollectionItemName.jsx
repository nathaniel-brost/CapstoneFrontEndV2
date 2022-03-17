import React from "react";
const CollectionItemName = ({ item }) => {
  const { itemName, category, quantityOwned } = item;

  return (
    <>
      <p>Name: {itemName} </p> 
    
    </>
  );
};

export default CollectionItemName;
