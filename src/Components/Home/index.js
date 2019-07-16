import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useSelector} from 'react-redux'

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345,
      height: 100,
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
  }));
  

export default function Home() {
    const classes = useStyles();
    const data = useSelector(response => response)
    return (
        <Card className={classes.card}>
            <CardHeader
                action={
                <IconButton aria-label="Settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title={data.name}
                subheader={data.email}
            />
        </Card>
    )
}
