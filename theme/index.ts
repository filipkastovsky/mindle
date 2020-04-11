import { createMuiTheme } from '@material-ui/core/styles';
import Colors from './Colors';

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
        MuiBottomNavigationAction: {
            root: {
                color: Colors.Dark,
                background: Colors.Grey,
                fontWeight: 'bold',
                borderTopLeftRadius: '1.5em',
                borderTopRightRadius: '1.5em',
                '&$selected': {
                    color: Colors.White,
                    background: Colors.Gradient,
                },
            },
            selected: {},
        },
    },
});
