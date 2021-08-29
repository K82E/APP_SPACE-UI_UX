import {makeStyles} from "@material-ui/core";
import ImageLogin from '../asset/LoginImage.png'

const useSteyles = makeStyles(theme => (({

    StyleLoginContainer:{
        display:'flex',
        width: '1248px',
        height: '1024px',
        background: '#FFFFFF',
    }, 
    StyleImageBack:{
        width: '712px',
        height: '1024px',
        left: '0px',
        top: '-2px',
        background: '#C4C4C4',
         backgroundImage: `url(${ImageLogin})`,

         marginRight:'20px'
    },
    StyleForm:{
        display:'flex',
        flexDirection: 'column',
        padding: '18px 26px',
        margin: '20px',
        alignItems: 'center',
        justifyItems: 'center',
        position: 'absolute',
        top: '140px',
        left: '908px',


    },
    StyleInput:{
        margin: '20px',
        width: '350px',

        fontSize: '1.05rem'

    },
    StyleInputPagraphaf:{
        width: '350px',
        fontSize: '1.2rem',
        margin: '22px',
    },
    StyleSeginOut:{
        display:'flex',
        flexDirection:'row',
        margin: '20px',
        width: '350px',

        fontSize: '1.05rem'

    },
    StyleButtonSiginOut1:{
        margin: '16px',
        width: '350px',

        borderStyle: 'none',
        background: 'none',
        //borderBottom: '1px solid rgb(0, 0, 0, 0.54)',
        fontSize: '1.5rem',

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: 'rgba(0, 0, 0, 0.54)',

    },
    StyleButtonSiginOut2:{
        margin: '16px',
        width: '350px',

        borderStyle: 'none',
        background: 'none',
        borderBottom: '1px solid rgb(0, 0, 0, 0.54)',
        fontSize: '1.5rem',

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: 'rgba(0, 0, 0, 0.54)'

    }


})));
export default useSteyles;