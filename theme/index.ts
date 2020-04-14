import { createMuiTheme } from '@material-ui/core/styles';
import Colors from './Colors';

const BORDER_RADIUS = '1.5em';

export default createMuiTheme({
    typography: {
        fontFamily: 'Nunito',
        fontSize: 12,
        button: { textTransform: 'none', fontWeight: 'bold', fontSize: 16 },
    },
    palette: {
        primary: {
            main: Colors.Blue,
        },
        secondary: {
            main: Colors.Green,
        },
    },
    overrides: {
        MuiInputLabel: {
            root: {
                fontWeight: 'bold',
            },
        },
        MuiBottomNavigationAction: {
            root: {
                color: Colors.Dark,
                background: Colors.Grey,
                fontWeight: 'bold',
                borderTopLeftRadius: BORDER_RADIUS,
                borderTopRightRadius: BORDER_RADIUS,
                '&$selected': {
                    color: Colors.White,
                    background: Colors.Gradient,
                },
            },
        },
        MuiPaper: {
            rounded: { borderRadius: BORDER_RADIUS },
        },
    },
});
