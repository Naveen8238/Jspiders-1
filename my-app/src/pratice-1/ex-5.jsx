import React, { useCallback, useState } from "react";

const Index = () => {
  const [data, showdata] = useState(false);
  return (
    <div>
      <button onClick={() => showdata(!data)}>
        {data ? "hidden" : "show"}
      </button>
      {data ? "Hello Naveen" : " "}
    </div>
  );
};

export default Index;
