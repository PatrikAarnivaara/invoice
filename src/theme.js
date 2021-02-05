import { createMuiTheme } from '@material-ui/core';
import { red, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: red[700],
		},
		secondary: {
			main: grey[200],
		},
	},
});

theme.props = {
	MuiToolbar: {
		variant: 'regular',
	},
	MuiTooltip: {
		arrow: true,
	},
	MuiIcon: {
		fontSize: 'large',
	},
};

theme.overrides = {
	MuiTableRow: {
		root: {
			cursor: 'pointer',
		},
	},
	MuiTypography: {
		h6: {
			marginLeft: '0.2em',
		},
		subtitle1: {
			color: '#212121',
			marginLeft: '1em',
			marginTop: '1em',
		},
		overline: {
			color: '#BDBDBD',
			lineHeight: 1.2,
		},
		body2: {
			color: '#212121',
			marginBottom: '0.5em',
		},
	},
	MuiCard: {
		root: {
			maxWidth: 365,
		},
	},
	MuiCardMedia: {
		media: {
			maxHeight: 165,
		},
	},
	MuiButton: {
		root: {
			backgroundColor: '#ffffff',
			/* padding: 20, */
		}
	}
};

export default theme;
