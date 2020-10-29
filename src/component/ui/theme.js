import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({

    palette: {
        common: {
          primary: '#000000',
          secondary: '#C4C4C4',
        },
        primary: {
          main: '#000000',
        },
        secondary: {
          main:'#868686',
        },
      },

      typography:{

          subtitle1:{
            fontFamily: 'Raleway',
              fontWeight:700,
              lineHeight:1.5,
              textDecoration:'underline'
          },
          subtitle2:{
            fontFamily: 'Raleway',
            textTransform: 'none',
            fontWeight:'bolder',
            fontSize: '1.2rem',
            lineHeight:1,

          },
          body1: {
            fontFamily: 'Raleway',   
            fontSize: '0.8rem',
            color: '#000000',
            fontWeight: 600,
          },
          body2: {
            fontFamily: 'Raleway',
            fontSize: '0.8rem',
            color: '#fff',
            fontWeight: 600,
            textTransform: 'none',

          },
          h6:{
            fontFamily: 'Raleway',
            fontSize: '1rem',
            color: '#00000',
            fontWeight: 900,
            textTransform: 'none',

          },
          
      }
})