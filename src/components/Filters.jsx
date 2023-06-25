import React from "react";

const Filters = ({ filters, deleteItem, clearItem }) => {
  const handleDelete = (e) => {
    deleteItem(e);
  };

  return (
    <div>
      {filters.length !== 0 && (
        <div className="absolute -top-8  mx-auto left-0 right-0  h-auto w-[90vw] rounded  bg-[#fff] flex justify-between px-8 py-4 ">
          <ul className="flex  flex-wrap gap-2">
            {filters.map((item, index) => {
              return (
                <div key={index} className="flex items-center h-[2rem] ">
                  <div className="bg-[#eef6f6]  px-2 rounded-l-md text-[#5ba4a4]">
                    {item}
                  </div>
                  <button
                    onClick={() => handleDelete(item)}
                    className="cursor-pointer px-2 bg-[#5ba4a4] hover:bg-[#2c3a3a] rounded-r-md text-[#fff] "
                  >
                    {" "}
                    X{" "}
                  </button>
                </div>
              );
            })}
          </ul>
          <button
            onClick={clearItem}
            className="text-[#2c3a3a] hover:text-[#5ba4a4] cursor-pointer font-bold"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default Filters;
