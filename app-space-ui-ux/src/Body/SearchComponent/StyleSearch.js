import { makeStyles } from "@material-ui/core"

const useSteyles = makeStyles({

    SearchContainer:{
        /* Barra_busqueda_viaje */

        /* Auto Layout */

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8px 8px 8px 30px',

        position: 'absolute',
        width: '801.55px',
        height: '61.55px',
        left: 'calc(50% - 801.55px/2 - 0.23px)',
        top: '750px',

        background: '#FFFFFF',
        borderRadius: '27px',

    },
    StyleDestiny:{
        /* Año de destino */

        position: 'static',
        width: '112px',
        height: '19px',
        left: '32px',
        top: '21.27px',

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '19px',
        /* identical to box height */
        display: 'flex',
        alignItems: 'center',
        color: '#333333',

        /* Inside Auto Layout */

        flex: 'none',
        order: '0',
        flexGrow: '0',
        margin: '0px 5px',
    },
    StylePlaceDes:{
        /* Lugar de destino */
        position: 'static',
        width: '125px',
        height: '19px',
        left: '205px',
        top: '21.27px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '19px',
        /* identical to box height */
        display: 'flex',
        alignItems: 'center',
        color: '#333333',
        /* Inside Auto Layout */
        flex: 'none',
        order: '2',
        flexGrow: '0',
        margin: '0px 5px',

    },
    StyleOrigin:{
        /* Origen */
        position: 'static',
        width: '48px',
        height: '19px',
        left: '392px',
        top: '21.27px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '19px',
        /* identical to box height */
        display: 'flex',
        alignItems: 'center',
        color: '#333333',
        /* Inside Auto Layout */
        flex: 'none',
        order: '4',
        flexGrow: '0',
        margin: '0px 5px',

    },
    StyleDate:{
        /* Fecha */
        position: 'static',
        width: '44px',
        height: '19px',
        left: '504px',
        top: '21.27px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '19px',
        /* identical to box height */
        display: 'flex',
        alignItems: 'center',
        color: '#333333',
        /* Inside Auto Layout */
        flex: 'none',
        order: '6',
        flexGrow: '0',
        margin: '0px 5px',

    },
    StylePassenger:{
        /* Pasajeros */
        position: 'static',
        width: '72px',
        height: '19px',
        left: '612px',
        top: '21.27px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '19px',
        /* identical to box height */
        display: 'flex',
        alignItems: 'center',
        color: '#333333',
        /* Inside Auto Layout */
        flex: 'none',
        order: '8',
        flexGrow: '0',
        margin: '0px 5px',

    },
    StyleLine8:{
        position: 'static',
        width: '33px',
        height: '0px',
        left: '176px',
        top: '14.27px',

        border: '1px solid #333333',
        transform: 'rotate(90deg)',

        /* Inside Auto Layout */

        flex: 'none',
        order: '1',
        flexGrow: '0',
        margin: '0px 5px',

    },
    StyleLine9:{

        position: 'static',
        width: '33px',
        height: '0px',
        left: '360px',
        top: '14.27px',

        border: '1px solid #333333',
        transform: 'rotate(90deg)',

        /* Inside Auto Layout */

        flex: 'none',
        order: '3',
        flexGrow: '0',
        margin: '0px 5px',

    },
    StyleLine10:{
        position: 'static',
        width: '33px',
        height: '0px',
        left: '472px',
        top: '14.27px',

        border: '1px solid #333333',
        transform: 'rotate(90deg)',

        /* Inside Auto Layout */

        flex: 'none',
        order: '5',
        flexGrow: '0',
        margin: '0px 5px',

    },
    StyleLine11:{
        position: 'static',
        width: '33px',
        height: '0px',
        left: '580px',
        top: '14.27px',

        border: '1px solid #333333',
        transform: 'rotate(90deg)',

        /* Inside Auto Layout */

        flex: 'none',
        order: '7',
        flexGrow: '0',
        margin: '0px 5px',

    },
    StyleLine12:{
        position: 'static',
        width: '33px',
        height: '0px',
        left: '716px',
        top: '14.27px',

        border: '1px solid #333333',
        transform: 'rotate(90deg)',

        /* Inside Auto Layout */

        flex: 'none',
        order: '9',
        flexGrow: '0',
        margin: '0px 5px',
        

    },
    StyleButton:{
        /* Frame 21 */


        /* Auto Layout */

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '24px',

        position: 'static',
        width: '30.55px',
        height: '30.55px',
        left: '748px',
        top: '8px',

        background: '#4B2BA5',
        borderRadius: '40px',

        /* Inside Auto Layout */

        flex: 'none',
        order: '10',
        flexGrow: '0',
        margin: '0px 32px',

    },
    StyleIconSearch:{
        /* Vector */


        position: 'relative',
        left: '-17.67%',
        right: '10.72%',
        top: '8.33%',
        bottom: '150.72%',

        color: '#FFFFFF',
    }
    
  });
export default useSteyles;