import { createMuiTheme } from '@material-ui/core';
import { pink, deepPurple } from '@material-ui/core/colors';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: pink[600],
		},
		secondary: {
			main: deepPurple[500],
			contrastText: pink[900],
		},
	},
	/* spacing: 8, */
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
	MuiGrid: {},
	MuiIconButton: {
		root: {
			color: '#9E9E9E',
			marginTop: '0.8em',
			opacity: 0.8,
		},
	},
	MuiTableRow: {
		root: {
			cursor: 'pointer',
		},
	},
	MuiToolbar: {
		root: { flex: '1 1 100%' },
	},
	MuiTypography: {
		h6: {
			color: '#9E9E9E',
		},
		subtitle1: {
			color: '#607D8B',
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
