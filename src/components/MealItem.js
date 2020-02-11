import React from "react";

const MealItems = ({ mealItems, basket, setBasket }) => {
  const addBasket = meal => {
    const copyTab = [...basket];
    const isFind = copyTab.find(el => el.id === meal.id);
    if (!isFind) {
      copyTab.push({
        id: meal.id,
        price: meal.price,
        title: meal.title,
        quantity: 1
      });
    } else {
      for (let i = 0; i < copyTab.length; i++) {
        copyTab[i].id === meal.id && copyTab[i].quantity++;
      }
    }

    setBasket(copyTab);
  };
  const items = mealItems.map((meal, index) => {
    return (
      <div
        key={index}
        className="card"
        onClick={() => {
          addBasket(meal);
        }}
      >
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
          <img className="image-card" src={meal.picture} alt={meal.title} />
        )}
      </div>
    );
  });

  return <div className="meal-card">{items}</div>;
};

export default MealItems;
