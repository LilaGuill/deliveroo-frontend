import React from "react";
import MealItems from "./MealItems";

const Meals = ({ meals }) => {
  const mealList = meals.map((meal, index) => {
    if (meal.meals.length > 0) {
      return (
        <div key={index}>
          <h2>{meal.name}</h2>
          <MealItems mealItems={meal.meals} />
        </div>
      );
    }
    return null;
  });
  return <div>{mealList}</div>;
};

export default Meals;
