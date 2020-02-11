import React from "react";
import Total from "./Total";

const Basket = ({ basket, setBasket, total, setTotal }) => {
  const remove = index => {
    const copyTab = [...basket];
    copyTab[index].quantity = copyTab[index].quantity - 1;
    if (copyTab[index].quantity <= 0) {
      copyTab.splice(index, 1);
    }
    setBasket(copyTab);
  };

  return (
    <div className="basket">
      <div className="basket-container">
        <button
          className={
            basket.length ? "basket-button active" : " basket-button inactive"
          }
        >
          Valider mon panier
        </button>
        {!basket.length ? (
          <div className="nothing">Votre panier est vide</div>
        ) : (
          <div className="main-basket">
            {basket.map((item, index) => {
              return (
                <div key={index} className="wrapper-basket">
                  <i
                    className="fas fa-minus-circle icon"
                    onClick={() => {
                      remove(index);
                    }}
                  ></i>

                  <div>{item.quantity}</div>

                  <i
                    className="fas fa-plus-circle icon"
                    onClick={() => {
                      const copyTab = [...basket];
                      copyTab[index].quantity++;
                      setBasket(copyTab);
                    }}
                  ></i>
                  <div className="basket-title">{item.title}</div>

                  <div>{item.price} €</div>
                </div>
              );
            })}

            <Total basket={basket} setTotal={setTotal} total={total} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
