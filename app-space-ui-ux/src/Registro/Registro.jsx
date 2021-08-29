import useSteyles from "./StyleRegistro";
import { FormHelperText, Input } from "@material-ui/core";

const Registro = () => {
  const classes = useSteyles();
  return (
    <div className={classes.StyleLoginContainer}>
      <div className={classes.StyleImageBack}></div>
      <div>
        <form className={classes.StyleForm}>
            <div className={classes.StyleSeginOut}>
                <input className={classes.StyleButtonSiginOut1} type="submit"  value="Inicia sesión"/>
                <input className={classes.StyleButtonSiginOut2} type="submit"  value="Regístrate"/>

            </div>
          <FormHelperText className={classes.StyleInputPagraphaf}>
            ¿Cómo Quieres que nos dijiramos a ti
          </FormHelperText>
          <Input
            className={classes.StyleInput}
            type="text"
            placeholder="nombre"
          />
          <Input
            className={classes.StyleInput}
            type="apellido"
            placeholder="apellido"
          />
          <FormHelperText className={classes.StyleInputPagraphaf}>
            Introduce un e-mail y contraseña para acceder a tu cuenta donde y
            cuando quieras.
          </FormHelperText>
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
          <FormHelperText className={classes.StyleInputPagraphaf}>
            Añade tu móvil para estar más cerca.
          </FormHelperText>
           <Input
            className={classes.StyleInput}
            placeholder="teléfono"
            type="phone"
          />
        </form>
      </div>
    </div>
  );
};

export default Registro;
