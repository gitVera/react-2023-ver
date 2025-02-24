import { Menu } from "@/components/Menu/Menu";
import { MenuSkeleton } from "@/components/Menu/MenuSkeleton";
import { STATUSES } from "@/constants/statuses";
import { useRequest } from "@/hooks/useRequest";
import { selectIsDishLoading } from "@/redux/features/dish/selectors";
import { fetchDishByRestaurantIdIfNotExist } from "@/redux/features/dish/thunk/fetchDishByRestaurantIdIfNotExist";
import { selectRestaurantDishIds } from "@/redux/features/restaurant/selectors";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const MenuContainer = ({ restaurantId, className }) => {
  const dishIds = useSelector((state) =>
    selectRestaurantDishIds(state, restaurantId)
  );

  const dishLoadingStatus = useRequest(
    fetchDishByRestaurantIdIfNotExist,
    restaurantId
  );

  if (dishLoadingStatus === STATUSES.pending) {
    return <MenuSkeleton />;
  }

  if (!dishIds?.length) {
    return null;
  }

  return <Menu dishIds={dishIds} className={className} />;
};
