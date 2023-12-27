import React from "react";

export const Card = ({ item }) => {
  console.log(item);
  return (
    <div className="text-white w-96 h-96">
      <div className="flex flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700 md:max-w-xl md:flex-row">
        <div className="flex flex-col justify-start p-6">
          <h5 className="mb-2 text-xl font-medium text-neutral-50">
            {item.name}
          </h5>
          <p className="mb-4 text-base h-10 text-neutral-200">{item.address}</p>
          <p className="mb-4 text-base  text-neutral-200">{item.message}</p>
          <p className="text-xl text-green-300">
            <a href={`/${item._id}`}>Details</a>
          </p>
        </div>
      </div>
    </div>
  );
};
