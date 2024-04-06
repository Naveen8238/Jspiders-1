import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ListComp = ({ setSelect }) => {
  const [Apidata, setData] = useState();
  const [cityData, setCityData] = useState("");
  const [stateData, setStateData] = useState("");

  const fetchApi = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let url = "https://api.minebrat.com/api/v1/states";
    fetchApi(url);
  }, []);
  function cityHandler(e) {
    setCityData(e.target.value);
  }
  let navigate = useNavigate();
  function submithandler() {
    if (!cityData || !setData) {
      alert("please select your city");
    } else {
      setSelect(true);
      navigate("/print", { state: { cityData, stateData } });
    }
  }

  return (
    <>
      {console.log(Apidata)}
      {!Apidata && <h1>loading...</h1>}
      {Apidata && (
        <ul>
          {Apidata.map((eachItem) => {
            const { stateId, stateName, city } = eachItem;
            return (
              <li key={stateId}>
                <h1>{stateId}</h1>
                <h1>{stateName}</h1>
                <select
                  onChange={(e) => {
                    cityHandler(e);
                    setStateData(stateName);
                  }}
                >
                  {city &&
                    city.map((item) => {
                      return (
                        <>
                          <option value={item.cityName}>{item.cityName}</option>
                        </>
                      );
                    })}
                </select>
                <button onClick={submithandler}>submit</button>
                {/* {!cityData && <h1>wait for while......</h1> }
                {cityData && } */}
                <hr />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default ListComp;
