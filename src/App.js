import theme from './theme';
import Invoice from './components/Invoice';
import TableToolbar from './UI/TableToolbar';
import { ThemeProvider, CssBaseline, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	root: {
		height: '100vh',
		marginLeft: '1em',
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
			<Grid container component="main" className={classes.root} spacing={8}>
				<Grid item xs={12} sm={7}>
					<TableToolbar />
					<Invoice />
				</Grid>
				<Grid item xs={false} sm={5} className={classes.image}></Grid>
			</Grid>
		</ThemeProvider>
	);
};

export default App;
