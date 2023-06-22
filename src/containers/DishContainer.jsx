import { Dish } from "@/components/Dish/Dish";
import { cartActions } from "@/redux/features/cart";
import { selectDishAmount } from "@/redux/features/cart/selectors";
import { selectDish } from "@/redux/features/dishes/selectors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const DishContainer = ({ dishId, ...props }) => {
  const amount = useSelector((state) => selectDishAmount(state, dishId));
  const dish = useSelector((state) => selectDish(state, dishId));
  const dispatch = useDispatch();

  const decrement = () => dispatch(cartActions.decrement(dishId));
  const increment = () => dispatch(cartActions.increment(dishId));

  if (!dishId) {
    return null;
  }

  return (
    <Dish
      {...props}
      dish={dish}
      amount={amount}
      increment={increment}
      decrement={decrement}
    />
  );
};
