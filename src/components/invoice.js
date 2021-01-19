import React, { useEffect, useState } from 'react';
import mockApi from '../api/mockApi';
import Table from '../UI/Table';
import TableToolbar from '../UI/TableToolbar';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage:
			'url(https://res.cloudinary.com/whatwherewhen/image/upload/v1610996874/samples/landscapes/z2ovbbi04028jmn0aj7l.jpg)',
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
	const [invoices, setInvoices] = useState([]);

	useEffect(() => {
		const getInvoices = async () => {
			try {
				const response = await mockApi.get('/invoices');
				setInvoices(response.data);
			} catch {
				console.log('GET invoices did not succeed.');
			}
		};
		getInvoices();
	}, []);

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={8} component={Paper} elevation={6}>
				<TableToolbar />
				<Table invoices={invoices} />
			</Grid>
			<Grid item xs={4} className={classes.image}>
				<h1>Detail here</h1>
			</Grid>
		</Grid>
	);
};

export default Invoice;
