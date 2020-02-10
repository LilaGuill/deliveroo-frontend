import React from "react";

const Image = ({ url }) => {
  return (
    <div>
      <img src={url} alt="restaurant" />
    </div>
  );
};

export default Image;
