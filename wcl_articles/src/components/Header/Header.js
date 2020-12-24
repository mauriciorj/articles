import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { Toolbar, Box, Grid, InputBase, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { MainHeader, SearchDiv, SearchIconDiv } from './css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

export const Header = ({ logoInfo, headerLinks }) => {
  const activeTheme = useContext(ThemeContext);
  return (
    <Grid xs={12}>
      <MainHeader position='static' background={activeTheme.colors.themeBlue}>
        <Toolbar>
          <Grid xs={2}>
            <Typography variant='h6' noWrap>
              {logoInfo?.map((logo) =>
                logo.type === 'Text' ? logo.title : 'IMAGE'
              )}
            </Typography>
          </Grid>
          <Grid xs={5}>
            <SearchDiv background={activeTheme.colors.themeWhite}>
              <InputBase
                placeholder='Search…'
                style={{
                  position: 'relative',
                  color: activeTheme.colors.themeGray,
                  paddingLeft: '10px',
                  width: '90%',
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
              <SearchIconDiv>
                <SearchIcon style={{ color: activeTheme.colors.themeGray }} />
              </SearchIconDiv>
            </SearchDiv>
          </Grid>
          <Grid xs={5}>
            <Box display='flex' justifyContent='flex-end'>
              {headerLinks?.map((header, index) =>
                header.type === 'Default' ? (
                  <Typography
                    key={index}
                    style={{
                      color: `${activeTheme.colors.themeWhite}`,
                      paddingRight: '30px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    {header.headerTitle}
                  </Typography>
                ) : header.type === 'Highlight' ? (
                  <Link
                    key={index}
                    to={header.link}
                    style={{
                      textDecoration: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography
                      key={index}
                      style={{
                        color: `${activeTheme.colors.themeWhite}`,
                        fontWeight: '600',
                        paddingRight: '30px',
                      }}
                    >
                      {header.headerTitle}
                    </Typography>
                  </Link>
                ) : (
                  <Button
                    key={index}
                    label={header.headerTitle}
                    background={activeTheme.colors.themeWhite}
                  />
                )
              )}
            </Box>
          </Grid>
        </Toolbar>
      </MainHeader>
    </Grid>
  );
};

Header.propTypes = {
  /**
   * Logo information: can be a string or an image
   */
  logoInfo: PropTypes.shape({
    type: PropTypes.oneOf(['Text', 'Image']),
    title: PropTypes.string,
    altText: PropTypes.string,
    link: PropTypes.string,
  }),
  /**
   * Header links types
   */
  headerLinks: PropTypes.shape({
    headerTitle: PropTypes.string,
    type: PropTypes.oneOf(['Default' | 'Highlight' | 'Button']),
    link: PropTypes.string,
  }),
};
