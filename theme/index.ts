import { createMuiTheme } from '@material-ui/core/styles';
import Colors from './Colors';

export default createMuiTheme({
    typography: {
        fontFamily: 'Nunito',
        fontSize: 12,
    },
    palette: {
        primary: {
            main: Colors.Blue,
        },
    },
});
