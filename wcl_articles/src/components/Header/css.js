import styled from "styled-components";
import { AppBar } from "@material-ui/core";

export const GrowDiv = styled.div`
  flexgrow: 1;
`;

export const MainHeader = styled(AppBar)`
  background-color: ${(props) => props.background} !important;
`;

export const SearchDiv = styled.div`
  position: relative;
  background-color: ${(props) => props.background};
  border-radius: 5px;
`;

export const SearchIconDiv = styled.div`
  width: 10%;
  height: 100%;
  position: absolute;
  pointerevents: none;
  display: flex;
  alignitems: center;
  justifycontent: center;
  right: 0;
  top: 0;
  padding-top: 5px;
`;
