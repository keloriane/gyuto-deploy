import React from "react";
import Mandala from "./assets/images/mandala.svg";

const Home = () => {
  return (
    <div id="background">
      <div id="container">
      <Vimeo videoId={ 279065288 } autoload={true} />
        <img src={Mandala} alt="" />
      </div>
    </div>
  );
};

export default Home;
