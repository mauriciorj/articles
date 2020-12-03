import React from "react";
import { Button } from "wcl_articles";

const clickHandler = () => {
  console.log('click handler is working!')
}

const HomePage = () => {
  return <div><Button label="test button" size="large" onClick={clickHandler}/></div>;
};

export default HomePage;
