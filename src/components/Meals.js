import React from "react";
import MealItem from "./MealItem";

const Meals = ({ meals, basket, setBasket }) => {
  const mealList = meals.map((meal, index) => {
    if (meal.meals.length > 0) {
      return (
        <>
          <h2 key={index}>{meal.name}</h2>
          <MealItem
            mealItems={meal.meals}
            basket={basket}
            setBasket={setBasket}
          />
        </>
      );
    }
    return null;
  });
  return <div>{mealList}</div>;
};

export default Meals;
