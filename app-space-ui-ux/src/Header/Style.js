import {makeStyles,

  } from "@material-ui/core";


 const useSteyles = makeStyles(theme => (({
    LogoConatiner: {
      display: "flex",
      flexDirection: "row",
      background: "rgba(23, 23, 40, 0.36)",

  
     
    },
    LogoStelyContainer:{
      justifyContent: "flex-end",
      alignItems: "center",
      padding: "12px 17px",
  
      position: "absolute",
      height: "56px",
      left: "0px",
      right: "0px",
      top: "0px",

    },
    LogoStyle:{
        /* LOGO */
  
          /* Auto Layout */
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0px',
  
          position: 'static',
          width: '85.43px',
          height: '31.08px',
          left: '17px',
          top: '12.46px',
          /* Inside Auto Layout */
  
          flex: 'none',
          order: '0',
          flexGrow: '0',
          margin: '-10px 10px',
    },
    AccountStyle:{
        /* BOTON USER */
  
        justifyContent:'space-between',
          position: 'static',
          width: '34px',
          height: '34px',
          left: '256px',
          top: '0px',
  
  
          /* Inside Auto Layout */
  
          flex: 'none',
          order: '1',
          flexGrow: '0',
          margin: '0px 24px',
          color: '#FFFFFF',
    },
    StyleCapsule:{
        /* CTA capsula */


        /* Auto Layout */

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px',

        position: 'static',
        width: '63px',
        height: '18px',
        left: '0px',
        top: '0px',


        /* Inside Auto Layout */

        flex: 'none',
        order: '0',
        flexGrow: '0',
        margin: '0px 24px',
    },
    StyleParadox:{
        /* CTA Paradoja */


        /* Auto Layout */

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px',

        position: 'static',
        width: '68px',
        height: '18px',
        left: '87px',
        top: '0px',


        /* Inside Auto Layout */

        flex: 'none',
        order: '1',
        flexGrow: '0',
        margin: '0px 24px',
    },
    StyleHistory:{
        /* CTA Paradoja */


        /* Auto Layout */

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px',

        position: 'static',
        width: '53px',
        height: '18px',
        left: '179px',
        top: '0px',


        /* Inside Auto Layout */

        flex: 'none',
        order: '1',
        flexGrow: '0',
        margin: '0px 24px',
    },
    StyleBoxContainerAccount:{
        /* CTAs text */


            /* Auto Layout */

            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0px',

            position: 'static',
            width: '232px',
            height: '18px',
            left: '0px',
            top: '8px',


            /* Inside Auto Layout */

            flex: 'none',
           
            flexGrow: '0',
            margin: '0px 24px',

    },
    StyleBoxContainerTitle:{
        /* text */


        /* Auto Layout */

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px',

        position: 'static',
        width: '232px',
        height: '8px',
        left: '0px',
        top: '0px',


        /* Inside Auto Layout */

        flex: 'none',
        order: '0',
        flexGrow:' 0',
        margin: '0px 24px',

    },
    ContainerMenuRight:{
        /* CTA derecho menu */


            /* Auto Layout */

            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0px',

            position: 'static',
            width: '290px',
            height: '34px',
            left: '941px',
            top: '11px',


            /* Inside Auto Layout */

            flex: 'none',
            order: '1',
            flexGrow: '0',
            margin: '0px 1289px',
    },

    StyleContainerLogin:{

      display: 'flex',
      flexDirection: 'column',
      alignDtems: 'center',
      padding: '10px',

      position: 'absolute',
      width: '157.31px',
      height: '78.7px',
      left: '1532px',
      top: '41.15px',
      background: '#FFFFFF',
      borderRadius: '10.4615px'

    },
    StelyTextContainer:{

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '6.53846px 0px',

      position: 'static',
      width: '154.31px',
      height: '32.69px',
      left: '10px',
      top: '42.38px',
    },

    StelyButtonLogin:{
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '6.53846px 13.0769px',

      position: 'static',
      width: '131.48px',
      height: '31.38px',
      left: '21.41px',
      top: '10px',

      background: '#4B2BA5',
      borderRadius: '5.23077px',

    },
    StyleTextButton:{
      position: 'static',
      left: '19.67%',
      right: '19.67%',
      top: '20.83%',
      bottom: '20.83%',

      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '10.4615px',
      lineHeight: '175%',
      /* identical to box height, or 18px */

      textAlign: 'center',
      letterSpacing: '0.258923px',

      color: 'rgba(255, 255, 255, 0.87)',


      /* Inside Auto Layout */

      flex: 'none',
      margin: '0px 13.0769px',

    }

  })));
  export default useSteyles;