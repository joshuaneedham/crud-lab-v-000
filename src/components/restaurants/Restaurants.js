import React, { Component } from 'react';
import Restaurant from './Restaurant'


const Restaurants = props => {
  const restaurants = props.restaurants.map(restaurant =>
    <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={props.deleteRestaurant} />)

  //render() {
  return (
    <ul>
      Restaurants Component
      {restaurants}
    </ul>
  );
}
//};

export default Restaurants;