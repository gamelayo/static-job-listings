import React from "react";
import PropertiesBox from "./PropertiesBox";
const preLink = require.context("../", true);
const Card = ({ info, updateItem, properties }) => {
  return (
    <div
      className={
        info.featured
          ? `border-l-4  border-l-[#5ba4a4] w-[90vw] rounded mx-auto bg-[#fff] my-10 h-auto relative flex flex-col md:flex-row md:gap-6 md:justify-between`
          : `w-[90vw] rounded  mx-auto bg-[#fff] my-10 h-auto relative flex flex-col md:flex-row md:gap-6 md:justify-between`
      }
    >
      <div className="ml-4 md:flex gap-3 items-center md:py-4">
        <img
          src={preLink(info.logo)}
          alt=""
          className="absolute top-[-12%]
          w-[3.8rem] h-[3.8rem] md:static md:w-[6.8rem] md:h-[6.8rem]"
        />
        <div className="pt-10 md:pt-0">
          <div className="flex gap-2 items-center my-1">
            <p className="text-[#5ba4a4] mr-2 font-bold">{info.company}</p>
            {info.new && (
              <p className="bg-[#5ba4a4] px-[.4rem] text-sm rounded-full text-[#fff]">
                NEW!
              </p>
            )}
            {info.featured && (
              <p className="bg-[#2c3a3a] px-[.4rem]  text-sm rounded-full text-[#fff]">
                FEATURED
              </p>
            )}
          </div>
          <p className="my-1 text-[#2c3a3a] font-bold">{info.position}</p>
          <div className="flex gap-2 whitespace-nowrap mt-1 mb-4 text-[#7b8e8e]">
            <p>{info.postedAt}</p>
            <p>.</p>
            <p>{info.contract}</p>
            <p>.</p>
            <p>{info.location}</p>
          </div>
        </div>
      </div>
      <hr className="md:hidden w-[90%] mx-auto" />
      <ul
        className="flex flex-wrap md:flex-nowrap gap-3  w-[80%] md:w-[60%] md:justify-end
      md:items-center ml-4 py-4 md:pr-5"
      >
        {properties.map((item, index) => {
          return (
            <PropertiesBox item={item} updateItem={updateItem} key={index} />
          );
        })}
      </ul>
    </div>
  );
};

export default Card;
