import React from "react";
const CollectionItem = ({ item }) => {
  const { itemName, category, quantityOwned } = item;

  return (
    <>
      <p>Name: {itemName} Category: {category} I have: {quantityOwned}</p> 
    
    </>
  );
};

export default CollectionItem;
