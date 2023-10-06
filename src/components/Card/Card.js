import React from "react";
import styles from "./Card.module.css";
import { IMG_CDN_URL } from "../../config";

const Card = ({ restaurant }) => {
  return (
    <div className={styles.card}>
      <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
      <div>
        <h2>{restaurant.name.split(" ").slice(0,4).join(" ")}</h2>
        <h4>{restaurant.cuisines.slice(0,4).join(", ")}</h4>
        <h4>Area: {restaurant.areaName}</h4>
        <span>
          <h4>
            <i className="fa-solid fa-star"></i>
            {restaurant?.avgRating}
          </h4>
          <h5>Total Ratings: {restaurant?.totalRatingsString}</h5>
          <h5>Cost For Two: {restaurant?.costForTwo}</h5>
          <h5>Delivery Time: {restaurant?.sla?.slaString}</h5>
        </span>
      </div>
    </div>
  );
};

export default Card;
