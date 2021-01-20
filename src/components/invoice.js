import React, { useEffect, useState } from 'react';
import mockApi from '../api/mockApi';
import InvoiceTable from './InvoiceTable';
import InvoiceDetail from './InvoiceDetail';
import TableToolbar from '../UI/TableToolbar';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid, Paper } from '@material-ui/core';

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
	const [invoiceDetail, setInvoiceDetail] = useState("");

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

	const displayInvoiceDetail = (id, type, accountName, status, currency, balance) => {
		setInvoiceDetail({
			...invoiceDetail,
			id: id,
			type: type,
			accountName: accountName,
			status: status,
			currency: currency,
			balance: balance,
		});
	};

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={8} component={Paper} elevation={6}>
				<TableToolbar />
				{invoices && <InvoiceTable invoices={invoices} displayInvoiceDetail={displayInvoiceDetail} />}
			</Grid>
			<Grid item xs={4} className={classes.image}>
				<InvoiceDetail invoiceDetail={invoiceDetail} setInvoiceDetail={setInvoiceDetail} />
			</Grid>
		</Grid>
	);
};

export default Invoice;
