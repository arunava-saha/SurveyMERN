import React, { useEffect, useState } from "react";
import { Card } from "./Card";

const Home = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8001/user")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data.data);
      });
  }, []);
  console.log(datas);
  return (
    <>
      <div className="text-center p-4 text-blue-700 font-bold">
        Survey: {datas.length}
      </div>
      <div className="flex flex-wrap gap-4 m-10">
        {datas.map((el, i) => (
          <div key={i}>
            <div>
              <Card item={el} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
