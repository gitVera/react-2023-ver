/* eslint-disable react/jsx-key */
import React from "react";
import { Menu } from "@/components/Menu/Menu";
import { Review } from "@/components/Review/Review";

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
        {reviews?.length > 0 && reviews.map(({user, rating, text}) => {
          return (
            <Review user={user} rating={rating} text={text} />
        )})}
      </ul>
    </div>
  ));
};
