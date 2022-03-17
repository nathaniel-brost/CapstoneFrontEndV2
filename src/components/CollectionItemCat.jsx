import React from "react";
const CollectionItemCat = ({ item }) => {
  const { itemName, category, quantityOwned } = item;

  return (
    <>
      <p>Category: {category} </p> 
    
    </>
  );
};

export default CollectionItemCat;
