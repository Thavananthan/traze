import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';


import Logo from '../assets/nobackblack2.svg';
import Vector from '../assets/Vector.svg';

const useStyles = makeStyles((theme) => ({

    ellipse:{
        width:80,
        height:80,
        borderRadius:40,
        backgroundColor:'#00a152',
        justifyContent:'center',
        alignItems:'center',
        position:'absloute'

    },
    sendButton: {
        borderRadius: 5,
        color:'white',
        height: 30,
        width: 160,
        fontSize: '1rem',
        backgroundColor: theme.palette.common.primary,
        '&:hover': {
          backgroundColor: theme.palette.secondary.light,
        },
      },
      paper:{
        width:50,
        height:50,
        backgroundColor: theme.palette.common.secondary,

    },
}));


const Success = () => {

    const classes = useStyles();
    const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));





  return(
    <Grid container>
        <Grid
        item
        container
        direction='column'
        alignItems='center'
        justify='center'
        style={{
            marginBottom: matchesMD ? '5em' : 0,
            marginTop: matchesSM ? '1em' : matchesMD ? '5em' : 0,
            marginLeft : matchesXS? '1em': matchesSM ? '2em':0,
            marginRight : matchesXS? '1em': matchesSM ? '2em': 0,

        }}
        >
            <Grid
            item
            style={{ marginTop: '3em',marginBottom:'3em' }}
            >
              <img src={Logo} alt='logo' style={{maxWidth:'15em',height:'2em',width:'5em' }} />
            </Grid>

            <Grid
            item
            style={{ marginTop: '2em',marginBottom:'1em' }}
            >
                 <Paper className={classes.ellipse} >
                 <img src={Vector} alt='vector' style={{maxWidth:'4em', width:'2em',marginTop:'1.8em',marginLeft:'1.5em' }} />
                </Paper>
            </Grid>

            <Grid
            item
            style={{ marginTop: '2em',marginBottom:'3em' }}
            >
                <Typography 
                 variant='h6'
                 align={matchesSM ? 'center' : undefined}
                 paragraph >
                   Thank you for sharing your information
                 </Typography>
            </Grid>

            <Grid item container 
                alignItems='center'
                justify='center'
                direction='column'
             >
              <Grid item style={{ marginTop: '1em',marginBottom:'0.5em' }}>
                 <Paper className={classes.paper} />



              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                  <Typography paragraph align="center" style={{color: theme.palette.common.secondary}}>
                  An initiative by FlipBox
                  </Typography>
              </Grid>
          </Grid>

            <Grid item container 
                alignItems='center'
                justify='center'>
                <Button
                 component={Link}
                 to='/'
                variant='contained'
                // onClick={onConfirm}
                className={classes.sendButton}
                >
                <Typography  variant='body2' >Go Back</Typography>
                </Button>
          </Grid>

        </Grid> 
    </Grid>       
  )
}

export default Success;