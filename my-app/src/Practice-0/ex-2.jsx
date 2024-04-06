import React from "react";
import "./0.css";
import { data } from "./data";
const Index = () => {
  return (
    <>
      {data.map((eachItem) => {
        const { id, title, url } = eachItem;
        return <Card id={id} title={title} url={url} key={id} />;
      })}
    </>
  );
};
const Card = (props) => {
  const { id, title, url } = props;
  return (
    <section className="Hello">
      <h1>The id {id}</h1>
      <h1> title {title}</h1>
      <img src={url} alt={title} />
    </section>
  );
};
export default Index;
