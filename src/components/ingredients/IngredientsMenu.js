import styled from "styled-components";
import backgroundPhoto from "../../images/backgroundPizza.png";
import Sauce from "./Sauce";
import Cheese from "./Cheese";
import Meet from "./Meet";
import Other from "./Other";

const IngredientsMenu = ({ chosen, setChosen }) => {
  return (
    <Ingredients>
      <Sauce chosen={chosen} setChosen={setChosen} />
      <Cheese chosen={chosen} setChosen={setChosen} />
      <Meet chosen={chosen} setChosen={setChosen} />
      <Other chosen={chosen} setChosen={setChosen} />
    </Ingredients>
  );
};

const Ingredients = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  background-image: url(${backgroundPhoto});
  background-repeat: no-repeat;
  background-size: 100%;

  color: white;

  @media (max-width: 768px) {
    background-repeat: repeat-y;
  }
`;

export default IngredientsMenu;
