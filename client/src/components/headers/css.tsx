import React from 'react';
import styled from "styled-components";
import { AppBar, InputBase } from "@material-ui/core";

export interface BoxProps {
  background: string
}

export const Header = styled(AppBar )`
  background-color: ${(props: BoxProps) => props.background};
`;

export const SearchBar = styled(InputBase)`
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: fade(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: fade(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
`
