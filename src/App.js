import React, { useState, useEffect } from "react";
import Axios from "axios";
import ToolBar from "./components/Toolbar";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Basket from "./components/Basket";
import "./App.css";

function App() {
  const [meals, setMeals] = useState("");
  const [isloading, setIsLaoding] = useState(true);

  const fetchData = async () => {
    const response = await Axios.get(
      "https://deliveroo-backend-lg.herokuapp.com/"
    );
    setMeals(response.data);
    setIsLaoding(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ToolBar />

      {isloading === true ? (
        <div>is loading</div>
      ) : (
        <>
          <Header
            title={meals.restaurant.name}
            imgUrl={meals.restaurant.picture}
            description={meals.restaurant.description}
          />
          <div className="main-container">
            <Meals meals={meals.categories}></Meals>
            <Basket />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
