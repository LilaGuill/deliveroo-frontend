import React from "react";

const Title = ({ title, description }) => {
  return (
    <div className="title">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Title;
