import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 60px;
  background-color: rgb(249, 245, 240);
  width: 100%;
`;

export const NavbarWrapper = styled.div`
  padding: 0px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

export const NavbarLogo = styled.div`
  flex: 1;
  font-family: "MonteCarlo", cursive;
  font-size: 2rem;
`;

export const NavigationLinksContainer = styled.div`
  flex: 1;
`;

export const UserInteractionsContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
`;

export const SearchInputWrapper = styled.div`
  width: 65%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #d2d2d2;
  background-color: rgb(255, 255, 255, 0.2);
  border-radius: 5px;
`;

export const SearchInput = styled.input`
  background: none;
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  list-style: none;
`;

export const ListItem = styled.li`
  padding: 0px 10px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;

  &:hover {
    text-decoration: underline;
    color: black;
  }
  &:visited {
    text-decoration: none;
  }
`;
