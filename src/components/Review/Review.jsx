import React from "react";

export const Review = ({user, text, rating}) => {
  return (
    <div>
      <span>{user}</span> - <b>{rating}</b>: <span>{text}</span>
    </div>
  );
};
