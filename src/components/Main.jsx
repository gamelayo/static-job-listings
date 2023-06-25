import React from "react";
import data from "../data.json";
import Card from "./Card";
const Main = ({ updateItem }) => {
  const Data = data.map((item) => {
    let allProperties = [item.role, item.level];
    allProperties = allProperties.concat(item.languages);
    allProperties = allProperties.concat(item.tools);
    return (
      <Card
        info={item}
        key={item.id}
        updateItem={updateItem}
        properties={allProperties}
      />
    );
  });
  return <div className="py-10">{Data}</div>;
};

export default Main;
