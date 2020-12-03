import React from 'react';
import styled from "styled-components";
import { Box } from "@material-ui/core";

export interface BoxProps {
  background: string
}

export const Header = styled(Box)`
  background-color: ${(props: BoxProps) => props.background};
`;

