import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Card from '@material-ui/core/Card';

import {
  Avatar,
  CardActions,
  CardContent,
  CardHeader,
  createStyles,
  IconButton,
  makeStyles,
} from '@material-ui/core';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import { red } from '@material-ui/core/colors';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ShareIcon from '@material-ui/icons/Share';
import Typography from '@material-ui/core/Typography';
import { InfoList } from '../InfoList/InfoList';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 700,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    articleInfo: {
      fontSize: '14px',
      color: '#3e3e3e',
    },
  })
);

export const ArticleCard = ({
  id,
  url,
  title,
  source,
  sourceImage,
  publishedDate,
  list,
  favorite,
  description,
}) => {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  const activeTheme = useContext(ThemeContext);
  const [saved, setSaved] = useState(favorite);

  const handleReadMore = () => {
    console.log('Read more clicked');
  };

  const handleSaving = () => {
    setSaved(!saved);
  };

  const handleSharing = () => {
    console.log('Share button clicked');
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label='recipe'
            src={sourceImage}
            className={classes.avatar}
          ></Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            {/* TODO: Implement more options such as: Remove this category from feed etc. */}
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title={`Extracted from ${source}`}
        subheader={publishedDate}
      />
      <CardContent>
        <Link
          style={{ textDecoration: 'none' }}
          to={{
            pathname: `/articleView/${id}`,
            state: { fromDashboard: true, url },
          }}
        >
          <Typography
            variant='h5'
            color='textPrimary'
            component='h2'
            gutterBottom={true}
          >
            {title}
          </Typography>
          <Typography
            style={{ marginBottom: '1rem' }}
            variant='body2'
            color='textSecondary'
            component='p'
          >
            {description}
          </Typography>
        </Link>
        <InfoList list={list}></InfoList>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label='add to favorites'
          aria-pressed={saved}
          onClick={handleSaving}
        >
          <BookmarkIcon
            style={{
              color: saved
                ? activeTheme.colors.themeBlue
                : activeTheme.colors.themeGray,
            }}
          />
        </IconButton>
        <IconButton aria-label='share' onClick={handleSharing}>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
