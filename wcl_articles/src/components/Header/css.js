import styled from "styled-components";
import { AppBar } from "@material-ui/core";

export const GrowDiv = styled.div`
  flexgrow: 1;
`;

export const MainHeader = styled(AppBar)`
  background-color: ${(props) => props.background} !important;
`;

export const SearchDiv = styled.div`
  background-color: ${(props) => props.background};
  border-radius: 5px;
  position: relative;
`;

export const SearchIconDiv = styled.div` 
  alignitems: center;
  display: flex;
  height: 100%;
  justifycontent: center;
  padding-top: 5px;
  pointerevents: none;
  position: absolute;
  right: 0;
  top: 0;
  width: 10%;
`;
