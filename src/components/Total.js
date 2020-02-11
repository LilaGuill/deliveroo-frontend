import React from "react";

const Total = ({ total, setTotal, basket }) => {
  let fees = 2.5;
  let result = 0;
  for (let i = 0; i < basket.length; i++) {
    result = result + basket[i].quantity * basket[i].price;
  }
  setTotal(result);

  return (
    <>
      <div className="basket-total">
        <div className="subtotal">
          <div>Sous-total</div>
          <div className="price">{total.toFixed(2)} €</div>
        </div>
        <div className="subtotal">
          <div>Frais de livraison</div>
          <div className="price">{fees} €</div>
        </div>
      </div>
      <div className="total">
        <div>Total</div>
        <div>{(total + fees).toFixed(2)} €</div>
      </div>
    </>
  );
};

export default Total;
