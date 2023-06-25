import React from "react";

const PropertiesBox = ({ item, updateItem }) => {
  const handleUpdate = (e) => {
    updateItem(e);
  };

  return (
    <li
      onClick={() => handleUpdate(item)}
      className="bg-[#eef6f6] cursor-pointer p-1 h-[2rem] hover:bg-[#5ba4a4] text-[#5ba4a4] hover:text-[#effafa]"
    >
      {item}
    </li>
  );
};

export default PropertiesBox;
