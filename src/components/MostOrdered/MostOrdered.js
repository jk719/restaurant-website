// src/components/MostOrdered/MostOrdered.js
import React from 'react';
import './MostOrdered.css';
import kungPaoChickenImg from '../../assets/images/kungpao-chicken.jpg';
import crispyDuckImg from '../../assets/images/crispy-duck.jpg';
import vegetableSpringRollsImg from '../../assets/images/vegetable-springrolls.jpg';
import szechuanBeefImg from '../../assets/images/szechuan-beef.jpg';
import sweetSourPorkImg from '../../assets/images/sweet-sour-pork.jpg';
import eggFooYoungImg from '../../assets/images/egg-foo-young.jpg';
import honeyWalnutShrimpImg from '../../assets/images/honey-walnut-shrimp.jpg';

const dishes = [
  {
    name: "Kung Pao Chicken",
    price: "$12.99",
    image: kungPaoChickenImg
  },
  {
    name: "Crispy Duck",
    price: "$15.99",
    image: crispyDuckImg
  },
  {
    name: "Vegetable Spring Rolls",
    price: "$6.99",
    image: vegetableSpringRollsImg
  },
  {
    name: "Szechuan Beef",
    price: "$14.99",
    image: szechuanBeefImg
  },
  {
    name: "Sweet and Sour Pork",
    price: "$13.99",
    image: sweetSourPorkImg
  },
  {
    name: "Egg Foo Young",
    price: "$10.99",
    image: eggFooYoungImg
  },
  {
    name: "Honey Walnut Shrimp",
    price: "$15.99",
    image: honeyWalnutShrimpImg
  }
];

function MostOrdered() {
    return (
        <div className="most-ordered">
            <h2 className="most-ordered-title">Most Ordered</h2>
            <div className="most-ordered-list">
                {dishes.map((dish, index) => (
                    <div key={index} className="dish">
                        <img src={dish.image} alt={dish.name} className="dish-image" />
                        <h3 className="dish-name">{dish.name}</h3>
                        <p className="dish-price">{dish.price}</p>
                        <button className="add-to-cart-button">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MostOrdered;
