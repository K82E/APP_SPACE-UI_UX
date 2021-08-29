import {
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Button,
  Link

  
} from "@material-ui/core";
import {useState} from "react";

import { AccountCircle } from "@material-ui/icons";
import Logo from "../asset/LOGO.png";
import useSteyles from '../Header/Style'



const MenuSpaceBar = (props) => {
  const classes = useSteyles();

  const [abrir, setAbrir] =useState(false);

let desplegar = () => {
  setAbrir(!abrir);
};

  return (
    <div>
      <AppBar position="absolute" className={classes.LogoConatiner}>
        <Toolbar>
            <div className={classes.ogoStelyContainer}>
              <img 
              className={classes.LogoStyle}
              src={Logo} 
              alt="Logo" />
            </div>
      
            <div className={classes.ContainerMenuRight}>
            <Typography
            variant="body1"
            className={classes.StyleCapsule}
            >Capsula</Typography>

            <Typography
            variant="body1"
            className={classes.StyleParadox}
            >Paradoja</Typography>
 
            <Typography
            variant="body1"
            className={classes.StyleHistory}
            >Historia</Typography>

            <IconButton
             onClick={() => desplegar()}
             className={classes.AccountStyle}

            >
             <AccountCircle 
             
             />
             </IconButton>
            </div >
        
           <div 
           className={classes.StyleContainerLogin} >
             
             <Button 
             className={classes.StelyTextContainer}
             variant="contained"
             color="secondary"
             ><Typography
             className={classes.StyleTextButton}
              >INICIAR SESION</Typography></Button>
             <div >
               <Typography color='primary'>¿No tienes cuenta? <Link href="#">Registrate</Link> </Typography>
             </div>
           </div>
         
         

        </Toolbar>
      </AppBar>
    </div>
  );
};
export default MenuSpaceBar;
