import React from "react";
import data from "../data.json";
import Card from "./Card";
import Filters from "./Filters";
const MainFilterBox = ({ updateItem, deleteItem, clearItem, filters }) => {
  // eslint-disable-next-line array-callback-return
  const Data = data.map((item) => {
    let allProperties = [item.role, item.level];
    allProperties = allProperties.concat(item.languages);
    allProperties = allProperties.concat(item.tools);
    let x = true;
    for (let y = 0; y <= filters.length - 1; y++) {
      if (!allProperties.includes(filters[y])) {
        x = false;
      }
    }
    if (x === true) {
      return (
        <Card
          info={item}
          key={item.id}
          updateItem={updateItem}
          properties={allProperties}
        />
      );
    }
  });

  return (
    <div className="py-10 relative">
      <Filters
        filters={filters}
        deleteItem={deleteItem}
        clearItem={clearItem}
      />
      {Data}
    </div>
  );
};

export default MainFilterBox;
