import React, { useState, useEffect } from "react";
const CityListComponent = ({ stateId }) => {
  const [CityData, setCityData] = useState();
  const [Cdata, setCdata] = useState();
  const fetchApi = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCityData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApi("https://api.minebrat.com/api/v1/states");
  }, []);
  useEffect(() => {
    if (CityData) {
      let newdata = CityData.filter((eachItem) => {
        return eachItem.stateId === stateId;
      });
      setCdata(newdata);
    }
  }, []);
  console.log(Cdata);
  return (
    <>
      <select>
        {!Cdata && <h1>Loading</h1>}
        {Cdata &&
          Cdata.map(({ city }) => {
            console.log(city);
          })}
      </select>
    </>
  );
};
export default CityListComponent;
