import React, { useState, useEffect } from "react";
import styles from "./Body.module.css";
import { restaurantList, swiggy_api_URL } from "../../config";
import Card from "../Card/Card";
import Shimmer from "../Shimmer/Shimmer";

const filteredData = (searchText, restaurants) => {
  const data = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return data;
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      const data = await fetch(swiggy_api_URL);
      const res = await data.json();
      setRestaurants(
        res?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants
      );
      setFilteredRestaurants(
        res?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };

  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const data = filteredData(searchText, restaurants);
      setFilteredRestaurants(data);
    } else {
      setFilteredRestaurants(restaurants);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    searchData(searchText, restaurants);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <form className={styles.searchBar} onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="enter restaurant name..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        {restaurants?.length === 0 ? (
          <Shimmer />
        ) : (
          <div className={styles.cardsList}>
            {filteredRestaurants?.length === 0 ? (
              <h1>No Restaurants Found!</h1>
            ) : (
              filteredRestaurants.map((restaurant) => (
                <Card
                  key={restaurant?.info?.id}
                  restaurant={restaurant?.info}
                />
              ))
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default Body;
