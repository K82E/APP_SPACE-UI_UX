import useSteyles from "./StyleLogin";
import { Link, Input, Button } from "@material-ui/core";
import MenuSpaceBar from '../Header/Header'
const Registro = () => {
  const classes = useSteyles();
  return (
      
    <div className={classes.StyleLoginContainer}>
        <MenuSpaceBar></MenuSpaceBar>
      <div className={classes.StyleImageBack}></div>
      <div>
        <form className={classes.StyleForm}>
            <div className={classes.StyleSeginOut}>
                <input className={classes.StyleButtonSiginOut1} type="submit"  value="Inicia sesión"/>
                <input className={classes.StyleButtonSiginOut2} type="submit"  value="Regístrate"/>

            </div>
          <Input
            className={classes.StyleInput}
            label="Email"
            type="email"
            required
            placeholder="email"
          />
          <Input
            className={classes.StyleInput}
            placeholder="Password"
            type="password"
          />

           <Button
           className={classes.StyleButton}
           variant="contained"
          
           >ENTRAR</Button>

          <Link
           className={classes.StyleTokenPass}
          >¿Has olvidado tu contraseña?</Link>
     
         
        </form>
      </div>
    </div>
  );
};

export default Registro;
