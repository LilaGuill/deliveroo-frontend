import React from "react";

const MealItems = ({ mealItems }) => {
  const items = mealItems.map((meal, index) => {
    return (
      <div key={index}>
        <div className="card">
          <div className="detail-card">
            <h3>{meal.title}</h3>
            <div className="description">{meal.description.slice(0, 64)}</div>
            <div className="information">
              <div>{meal.price} €</div>
              {meal.popular && (
                <span>
                  <i className="fas fa-star"></i> Populaire
                </span>
              )}
            </div>
          </div>
          {meal.picture && (
            <img className="image-card" src={meal.picture} alt="menu" />
          )}
        </div>
      </div>
    );
  });

  return <div className="meal-card">{items}</div>;
};

export default MealItems;
