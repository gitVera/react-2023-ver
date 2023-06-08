import React from "react";
import { Menu } from "@/components/Menu/Menu";

export const Restaurants = ({ restaurants }) => {
  if (!restaurants?.length) {
    return null;
  }

  return restaurants.map(({ id, name, menu, reviews }) => (
    <div key={id}>
      <h2>{name}</h2>
      <Menu menu={menu} />
      <h3>Reviews</h3>
      <ul>
        {reviews?.length > 0 && reviews.map(({ text }) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </div>
  ));
};
