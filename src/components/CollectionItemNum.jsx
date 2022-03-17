import React from "react";
const CollectionItemNum = ({ item }) => {
  const { itemName, category, quantityOwned } = item;

  return (
    <>
      <p> I have: {quantityOwned}</p> 
    
    </>
  );
};

export default CollectionItemNum;
