import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import HeadsetIcon from '@material-ui/icons/Headset';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import image from './digital-library-photo.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontSize:50
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 750,
    height:100,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={1}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="Bookimage" src={image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={8} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                <h2>Book Name</h2>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <h3>Author Name</h3>
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <div>
                    <PictureAsPdfIcon fontSize="large"></PictureAsPdfIcon>
                    <Typography variant="subtitle2" >Read</Typography>
                </div>
            </Grid>
             <Grid item xs={2}>
                  <div>
                  <HeadsetIcon fontSize="large"></HeadsetIcon>
                  <Typography variant="subtitle2"  >Listen</Typography>
                 </div>
             </Grid>
            </Grid>
             <Grid item xs={2}>
                 <div>
              < BookmarkBorderIcon fontSize="large" ></BookmarkBorderIcon>
              <Typography variant="subtitle2">Save</Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
