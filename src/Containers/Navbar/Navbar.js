import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import backgroundPhoto from "../../assets/images/blackboard-texture.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Nav>
        <Logo>
          <LogoText>
            <h2>Find Your</h2>
            <h1>Pizza</h1>
          </LogoText>
          <LogoImg>
            <img src={logo} alt="logo" />
          </LogoImg>
        </Logo>

        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLink href="">Home</MenuLink>
          <MenuLink href="">Menu</MenuLink>
          <MenuLink href="">About</MenuLink>
        </Menu>
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;

  background-image: url(${backgroundPhoto});
  background-repeat: no-repeat;
  background-size: 100%;
`;

const Nav = styled.div`
  position: relative;
  width: 85rem;
  max-width: 90vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;

  @media (max-width: 768px) {
    background-repeat: repeat-y;
  }
`;

const Logo = styled.a`
  display: flex;
  position: relative;
  //left: 5%;
`;

const LogoText = styled.div`
  margin: auto 0;
  text-align: right;
  color: white;

  h1 {
    font-size: 2rem;
    text-transform: uppercase;
    font-family: "Archistico";
  }

  h2 {
    font-size: 1rem;
  }
`;

const LogoImg = styled.div`
  img {
    position: relative;
    margin-top: 15%;
    height: 100px;
    width: 77px;

    /* max-width: 100%;
    height: auto; */
  }
`;

const Hamburger = styled.div`
  display: none;
  position: absolute;
  top: 25%;
  //right: 10%;
  cursor: pointer;
  width: 25px;

  span {
    height: 3px;
    background-color: white;
    margin-bottom: 4px;
    border-radius: 5px;
    width: 25px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
    overflow: hidden;
    position: relative;
    top: 25%;
    right: 5%;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: relative;
  //right: 5%;

  padding-left: 50px;
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom: 2px dashed white;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    right: 0%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};

    width: 100vw;
    overflow: hidden;
    border-bottom: none;
    padding-left: 0;
    padding-bottom: 0;
    transition: max-height 0.3s ease-in;
  }
`;

const MenuLink = styled.a`
  font-size: 1.2rem;
  text-decoration: none;
  margin-left: 3rem;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: darkgrey;
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export default Navbar;
