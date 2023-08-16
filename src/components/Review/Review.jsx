import React, { useState } from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";

import { useGetUsersQuery, useUpdateReviewMutation } from "@/redux/services/api";

import { Rating } from "@/components/Rating/Rating";
import { UserContainer } from "@/containers/UserContainer";
import { NewReviewFormContainer } from "@/containers/NewReviewFormContainer";

export const Review = ({ review, className }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  if (!review) {
    return null;
  }

  const saveReview = (newReview) => {
    const reviewId = review.id;
    updateReview({ reviewId, newReview })
  }

  if (isLoading || isUsersLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      { !changeMode ? (
          <Button onClick={() => setChangeMode(true)}>Редактировать</Button>
        )
        : (
          <div>
            <button
              onClick={() => {
                if (form.userId && form.text && form.rating) {
                  saveReview(form);
                  setChangeMode(false);
                }
              }}
            >
              SaveReview
            </button>
          </div>
        )
      }
      

    <div className={classNames(styles.root, className)}>
      <button onClick={() => setIsEditMode(!isEditMode)}>switchMode</button>
      {!isEditMode ? (
        <>
          <div className={styles.header}>
            <UserContainer userId={userId} />
            <div>{rating}</div>
          </div>
          <p>{text}</p>
        </>
      ) : (
        <NewReviewFormContainer review={review} />
      )}
    </div>
  );
};
