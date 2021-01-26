import Invoice from './components/Invoice';
import { ThemeProvider } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import TableToolbar from './UI/TableToolbar';
import theme from './theme';
import { CssBaseline, Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage:
			'url(https://res.cloudinary.com/whatwherewhen/image/upload/v1610996874/samples/landscapes/z2ovbbi04028jmn0aj7l.jpg)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
}));

const App = () => {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container disableGutters>
				<Grid container component="main" className={classes.root}>
					<Grid item xs={12} sm={3} md={7} /* sm={8} */>
						<TableToolbar />
						<Invoice />
					</Grid>
					<Grid item xs={false} sm={9} md={5} className={classes.image} /* sm={8} */>
					</Grid>
				</Grid>
			</Container>
		</ThemeProvider>
	);
};

export default App;
