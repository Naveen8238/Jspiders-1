import React from "react";

class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    let { data } = this.props;
    return (
      <>
        <h1>I am Home component </h1>
        <hr />
        {data &&
          data.map((eachItem, index) => {
            return (
              <div key={index}>
                <Card item={eachItem} />
              </div>
            );
          })}
      </>
    );
  }
}
class Card extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={{ color: "white", background: "black" }}>
        <h1>{this.props.item.id}</h1>
        <h1>{this.props.item.name}</h1>
        <h2>{this.props.item.email}</h2>
        <span>{this.props.item.body}</span>
      </div>
    );
  }
}
export default Home;

//App .jsx
// import React, { useEffect, useState } from "react";
// import Home from "./Class/ex-1";
// const App = () => {
//   const url = "https://jsonplaceholder.typicode.com/comments";
//   const [Data, setData] = useState();
//   const fetchData = async (url) => {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       setData(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     fetchData(url);
//   }, []);
//   return (
//     <>
//       <Home data={Data} />
//     </>
//   );
// };
// export default App;
