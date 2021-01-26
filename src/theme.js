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
		h5: {
			fontWeight: 500,
			marginLeft: '0.2em',
		},
		subtitle1: {
			color: '#212121',
			marginLeft: '1em',
			marginTop: '1em',
		},
		overline: {
			color: '#BDBDBD',
		},
		body2: {
			color: '#212121',
			marginBottom: '0.6em',
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
};

export default theme;
