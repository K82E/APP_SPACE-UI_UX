import { Grid } from "@material-ui/core";
import BodyCompoent from "../src/Body/BodyComponent/Body";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ThemeConfig";
import HomeBody from "./components/home-body";
import Registro from "./Registro/Registro";
import Login from './Login/Login'
function App() {
  return (

    <ThemeProvider theme={theme}>
       {/*<Login></Login>
     <Registro*></Registro*/}
     <BodyCompoent /> 
      <HomeBody></HomeBody> 
     
    </ThemeProvider>

  );
}

export default App;
