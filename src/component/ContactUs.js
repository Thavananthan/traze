import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';


import Logo from '../assets/nobackblack2.svg'



const useStyles = makeStyles((theme) => ({

        message: {
            border: `2px solid ${theme.palette.common.secondary}`,
            marginTop: '1em',
            borderRadius: 5,
          },
          paper:{
              width:50,
              height:50,
              backgroundColor: theme.palette.common.secondary,

          },
          sendButton: {
            borderRadius: 5,
            color:'white',
            height: 30,
            width: 160,
            fontSize: '1rem',
            marginBottom:'3em',
            backgroundColor: theme.palette.common.primary,
            '&:hover': {
            },
            
          },
    
}))

const ContactUs = (props) => {
    const classes = useStyles();
    const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));


    const [name, setName] = useState('');

    const [checked, setChecked] = useState(false);
    const [address, setAddress] = useState('');
    const [tem_address, setTem_Address] = useState('');

    const [nic, setNic] = useState('');

    const [phone, setPhone] = useState('');
    const [phoneHelper, setPhoneHelper] = useState('');

    const [message, setMessage] = useState('');


    const onChange = (event) => {
        let valid;
    
        switch (event.target.id) {
          case 'phone':
            setPhone(event.target.value);
            valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
              event.target.value
            );
    
            if (!valid) {
              setPhoneHelper('Invalid phone number ');
            } else {
              setPhoneHelper('');
            }
    
            break;
          default:
            break;
        }
      };

      const onConfirm = () => {
          console.log('condirem button');
          setName('');
        setPhone('');
        setMessage('');
        setNic('');
        setAddress('');
        setTem_Address('');
        setChecked(false)

      }

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
      <Grid item container direction="row" justify= {matchesSM ? "space-between" : "center"} style={{marginTop:'1.5em'}}>
          <Grid item align="flex-start">
          <img src={Logo} alt='logo' style={{maxWidth:'8em',height:'2em',width:'5em' }} />
          </Grid>
          <Grid item align="flex-end">
               <Typography paragraph variant='subtitle1'>
                  Merchants
               </Typography>
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
                <TextField
                value={message}
                id='message'
                fullWidth={true}
                InputProps={{ disableUnderline: true }}
                className={classes.message}
                multiline
                rows={8}
                onChange={(event) => setMessage(event.target.value)}
                />
             </Grid>
             <Grid item style={{ marginBottom: '1em', }}>
                  <Typography 
                   variant='body1'
                   align={matchesSM ? 'left' : undefined}
                   paragraph >
                  Add your contact details and press share to share the details
                  </Typography>
             </Grid>

             <Grid item style={{ marginBottom: '0.5em', }}>
                  <Typography 
                   variant='subtitle2'
                   align={matchesSM ? 'left' : undefined}>
                    Contact Details
                  </Typography>
             </Grid>

             <Grid item style={{ marginBottom: '0.3em', }}>
                  <Typography 
                   variant='body1'
                   align={matchesSM ? 'left' : undefined}
                   paragraph >
                    Add your conntact details once and you’re all done. No need to fill forms again
                  </Typography>
             </Grid>

            <Grid item style={{ marginBottom: '1em' }}>
              <TextField
                label='Name'
                fullWidth={true}
                id='name'
                 value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: '1em' }}>
              <TextField
                label='Permanent Address'
                fullWidth={true}
                id='address'
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: '1em' }}>
              <TextField
                label='Phone'
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                id='phone'
                fullWidth={true}
                value={phone}
                onChange={onChange}
              />
            </Grid>

            <Grid item style={{ marginBottom: '1em' }}>
              <TextField
                label='National Identity Card No.'
                fullWidth={true}
                id='nic'
                value={nic}
                onChange={(event) => setNic(event.target.value)}
              />
            </Grid>
            
            <Grid item style={{marginBottom:'0.2em'}}>
                <FormControlLabel
                    value="end"
                    control={<Checkbox color="primary" checked={checked} onChange={()=> setChecked(!checked)} />}
                    label="Same as the permanent address"
                    labelPlacement="end"
                />
            </Grid>
            <Grid item style={{ marginBottom: '1em' }}>
              <TextField
                label='Temporary Address'
                fullWidth={true}
                id='tem_address'
                value={checked ? address : tem_address}
                disabled={ checked ? true : false}
                onChange={(event) =>setTem_Address(event.target.value)}
              />
            </Grid>
          </Grid>
         
         
        </Grid>
        <Grid item container 
          alignItems='center'
          justify='center'>
            <Button
               component={Link}
               to='/success'
              variant='contained'
              disabled={
                name.length === 0 ||
                address.length === 0 ||
                nic.length === 0 ||
                message.length === 0 ||
                phoneHelper.length !== 0 ||
                tem_address.length!== 0
              }
              onClick={onConfirm}
              className={classes.sendButton}
            >
             <Typography  variant='body2' >Share</Typography>
            </Button>
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
    </Grid>
      
  )

}

export default ContactUs;