import styled from "styled-components";
import { Button } from "@material-ui/core";

export const BaseButton = styled(Button)`
  background-color: ${(props) => props.background} !important;
  color: ${(props) => props.color} !important;
`;
