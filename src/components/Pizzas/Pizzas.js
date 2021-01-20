import React from 'react';
import styled from 'styled-components';
import pattern from '../../images/pattern.png';
import PizzaCard from '../Pizzas/PizzaCard';

const Pizzas = () => {
  return (
    <AllPizzas>
      {/*  <PizzaCard /> */}

      {/*  <Ingredients />
      {recipes.map((recipe) => (
        <Recipe
          id={recipe.pizza_id}
          title={recipe.title}
          ingredients={recipe.ingredients}
        />
      ))} */}
    </AllPizzas>
  );
};

const AllPizzas = styled.div`
  background-image: url(${pattern});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 500px;
`;

export default Pizzas;