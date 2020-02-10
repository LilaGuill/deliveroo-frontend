import React from "react";
import Title from "./Title";
import Image from "./Image";

const Header = ({ title, description, imgUrl }) => {
  return (
    <div className="header">
      <div className="header-container">
        <Title title={title} description={description} />
        <Image url={imgUrl} />
      </div>
    </div>
  );
};

export default Header;
