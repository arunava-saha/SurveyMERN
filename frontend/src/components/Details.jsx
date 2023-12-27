import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    fetch(`https://survey-tg4p.onrender.com/user/1/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setItem(result.data);
      });
  }, []);
  console.log(item);
  return (
    <>
      <div>
        <div className="p-3 max-w-7xl m-10 text-gray-50 bg-black">
          <div className="mt-6 sm:mt-10">
            <div>
              <div className="grid gird-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-6 h-max">
                {/* Product Image */}
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                    alt="Product-Image"
                    className="w-full"
                  />
                </div>
                {/* Product Details */}
                <div className="flex flex-col items-start justify-between">
                  <div className="">
                    {/* Product Title */}
                    <h1 className="text-3xl text-red-500 uppercase font-semibold sm:text-4xl">
                      {item.name}
                    </h1>
                    {/* Product Description */}
                    <p className="mt-3 text-gray-600 text-md leading-6 text-justify sm:text-left sm:mt-4">
                      {item.message}
                    </p>
                    {/* Star Ratings */}
                    <span className="my-3 text-xl capitalize text-yellow-600 flex items-center gap-1 sm:my-4">
                      {item.nationality}
                    </span>
                    {/* Product Price */}
                    <span className="text-xl capitalize text-red-500 font-semibold sm:text-2xl">
                      {item.gender}
                    </span>
                  </div>
                  {/* Quantity Input and Order Button */}
                  <div>
                    <div className="flex gap-24">
                      <div className="text-left flex flex-col gap-2 w-full">
                        {/* Quantity Label */}
                        <label className="font-semibold">Email</label>
                        {/* Quantity Input */}
                        <div className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500">
                          {item.email}
                        </div>
                      </div>

                      <div className="text-left flex flex-col gap-2 w-full">
                        {/* Quantity Label */}
                        <label className="font-semibold">Phone</label>
                        {/* Quantity Input */}
                        <div className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500">
                          {item.phone}
                        </div>
                      </div>
                    </div>
                    <div className="w-full text-left my-4">
                      <p className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white text-md font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6">
                        <span>{item.address}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
