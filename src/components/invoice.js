import React from 'react';
import Table from '../UI/Table';
import Grid from '@material-ui/core/Grid';
/* TODO: Look up CSSBASELINE! */
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage:
			'url(https://res.cloudinary.com/whatwherewhen/image/upload/v1610977367/xn9y3a5t7wxwcty2vfoe.png)',
		backgroundRepeat: 'no-repeat',
		backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
		margin: theme.spacing(4, 8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
}));

const Invoice = () => {
	const classes = useStyles();
	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={8} component={Paper} elevation={6} square>
				<Table />
			</Grid>
			<Grid item xs={4} className={classes.image}>
				<h1>Detail here</h1>
			</Grid>
		</Grid>
	);
};

export default Invoice;
