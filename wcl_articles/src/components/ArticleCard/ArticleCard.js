import React from 'react';

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
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { red } from '@material-ui/core/colors';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ShareIcon from '@material-ui/icons/Share';
import Typography from '@material-ui/core/Typography';

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

export const ArticleCard = () => {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label='recipe'
            src='data:image/png;base64,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'
            className={classes.avatar}
          ></Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title='Extracted from Medium'
        subheader='Published on September 14, 2016'
      />
      <CardContent>
        <Typography
          variant='h5'
          color='textPrimary'
          component='h2'
          gutterBottom={true}
        >
          Autofocus That Works Anytime in Angular Apps
        </Typography>
        <Typography
          variant='body2'
          color='textSecondary'
          component='p'
          gutterBottom={true}
        >
          I see a lot of developers struggling with the following scenario; they
          want a focusable element, such as input, to receive focus once it’s
          initially visible. The first thing everyone attempts is to add the
          native autofocus attribute to the element.
        </Typography>
        <Typography
          className={classes.articleInfo}
          variant='body2'
          color='textPrimary'
          component='span'
        >
          3 min read | 122 views | 49 likes
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <BookmarkIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
