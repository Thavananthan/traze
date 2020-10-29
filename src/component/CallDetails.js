import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Paper from '@material-ui/core/Paper';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles((theme) => ({

    sendButton: {
        borderRadius: 5,
        color:'white',
        height: 30,
        width: 70,
        fontSize: '1rem',
        backgroundColor: theme.palette.common.primary,
        
      },
      paper:{
        width:50,
        height:50,
        backgroundColor: theme.palette.common.secondary,

    },
    
}));

const CallDetails = () => {

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
                marginTop: matchesSM ? '1em' : matchesMD ? '5em' : '10em',
                marginLeft : matchesXS? '1em': matchesSM ? '2em':0,
                marginRight : matchesXS? '1em': matchesSM ? '2em': 0,

            }}
        >
                <Grid item container direction="row" justify= {matchesSM ? "space-between" : "space-around"} style={{marginTop:'1em'}}>
                    <Grid item align="flex-start">
                        <Typography paragraph variant='subtitle1' style={{textDecoration:'none'}}>
                           For Merchants
                        </Typography>
                    </Grid>
                    <Grid item align="flex-end">
                        <IconButton style={{marginTop:-10,marginLeft:20}}>
                            <CloseIcon style={{color:theme.palette.common.primary}} />
                        </IconButton>
                    </Grid>
                </Grid>  

                <Grid item>
                    <Grid container direction='column'>
                        <Grid
                            item
                            container
                            direction='column'
                        
                        >
                            <Grid
                            item
                            style={{ 
                            marginBottom: '1em',
                            }}
                            >

                            <Grid item style={{ marginBottom: '2em', }}>
                                <Typography 
                                variant='body1'
                                align={matchesSM ? 'left' : undefined}
                                paragraph >
                                If you want to implment this contact tracing app to your shop or retail store or anywhere please contact us.
                                </Typography>
                            </Grid> 
                            <Grid item style={{ marginBottom: '1em', }}>
                                <Typography 
                                 variant='subtitle2'
                                 align={matchesSM ? 'center' : undefined}>
                                        IT’S FREE OF CHARGE
                                 </Typography>
                             </Grid> 

                             <Grid item style={{ marginBottom: '1em', }}>
                                <Typography 
                                    variant='body1'
                                    align={matchesSM ? 'left' : undefined}
                                    paragraph >
                                    Help us to rebuild the country. Partner up with us and help us in this cause  
                                 </Typography>
                            </Grid> 
                          </Grid>
                      </Grid>
                 </Grid>  
               </Grid>  
     
               <Grid item container direction="row" justify= {matchesSM ? "space-between" : "space-around"} style={{marginTop:'1em'}}>
                    <Grid item align="flex-start">
                        <Typography paragraph variant='subtitle1' style={{textDecoration:'none',}} >
                           Call Us
                        </Typography>
                        <Typography paragraph  style={{textDecoration:'none',color: theme.palette.common.secondary,fontSize:'0.8rem',marginTop:-10,marginLeft:10}}>
                        +94 76 243 5678
                        </Typography>
                    </Grid>
                    <Grid item align="flex-end">
                    <Button
                        variant='contained'
                        // onClick={onConfirm}
                        className={classes.sendButton}
                        >
                        <Typography  variant='body2' >Call</Typography>
                    </Button>
                    </Grid>
                </Grid>  

                <Divider variant="middle" />


                <Grid item container direction="row" justify= {matchesSM ? "space-between" : "space-around"} style={{marginTop:'1em',marginBottom:'6em'}} >
                    <Grid item align="flex-start">
                        <Typography paragraph variant='subtitle1' style={{textDecoration:'none',}} >
                           Chat with Us
                        </Typography>
                        <Typography paragraph  style={{textDecoration:'none',color: theme.palette.common.secondary,fontSize:'0.8rem',marginTop:-10,marginLeft:10}}>
                         via Whatsapp 
                        </Typography>
                    </Grid>
                    <Grid item align="flex-end">
                    <Button
                        variant='contained'
                        // onClick={onConfirm}
                        className={classes.sendButton}
                        >
                        <Typography  variant='body2' >Chat</Typography>
                    </Button>
                    </Grid>
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

                            
                
        </Grid> 
    </Grid>       

  )

}

export default CallDetails