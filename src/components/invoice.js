import React, { useEffect, useState } from 'react';
import { orderBy, filter } from 'lodash';
import mockApi from '../api/mockApi';
import InvoiceTable from './InvoiceTable';
import InvoiceDetail from './InvoiceDetail';
import TableToolbar from '../UI/TableToolbar';
import SimpleMenu from '../UI/SimpleMenu';
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

const headCells = [
	{ id: 'type', numeric: false, disablePadding: true, label: 'Type' },
	{ id: 'accountName', numeric: true, disablePadding: false, label: 'AccountName' },
	{ id: 'status', numeric: false, disablePadding: false, label: 'Status' },
	{ id: 'currency', numeric: false, disablePadding: false, label: 'Currency' },
	{ id: 'balance', numeric: true, disablePadding: false, label: 'Balance' },
];

const Invoice = () => {
	const classes = useStyles();
	const [invoices, setInvoices] = useState([]);
	const [invoiceDetail, setInvoiceDetail] = useState('');
	const [trackIndex, setTrackIndex] = useState(-1);
	const [sortAndDirection, setSortAndDirections] = useState({ columnToSort: '', sortDirection: 'desc' });
	const invertDirection = { asc: 'desc', desc: 'asc' };

	console.log(
		filter(invoices, (invoice) => {
			return invoice.accountName.includes("wol");
		})
	);

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

	const handleSort = (columnId) => {
		setSortAndDirections({
			...sortAndDirection,
			columnToSort: columnId,
			sortDirection:
				sortAndDirection.columnToSort === columnId ? invertDirection[sortAndDirection.sortDirection] : 'asc',
		});
	};
	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={7} component={Paper} elevation={6}>
				<TableToolbar />
				{invoices && (
					<InvoiceTable
						invoices={orderBy(invoices, sortAndDirection.columnToSort, sortAndDirection.sortDirection)}
						displayInvoiceDetail={displayInvoiceDetail}
						setInvoiceDetail={invoiceDetail}
						trackIndex={trackIndex}
						setTrackIndex={setTrackIndex}
						headCells={headCells}
						handleSort={handleSort}
						columnToSort={sortAndDirection.columnToSort}
						sortDirection={sortAndDirection.sortDirection}
					/>
					/* <- Add spinner here -> */
				)}
			</Grid>
			<Grid item xs={5} className={classes.image}>
				<SimpleMenu />
				<InvoiceDetail
					invoiceDetail={invoiceDetail}
					setInvoiceDetail={setInvoiceDetail}
					setTrackIndex={setTrackIndex}
				/>
			</Grid>
		</Grid>
	);
};

export default Invoice;
