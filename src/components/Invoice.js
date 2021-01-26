import React, { useEffect, useState } from 'react';
import { orderBy /* filter */ } from 'lodash';
import mockApi from '../api/mockApi';
import InvoiceTable from './InvoiceTable';
import InvoiceDetail from './InvoiceDetail';
import SimpleMenu from '../UI/SimpleMenu';
import { Grid, Paper } from '@material-ui/core';

// TODO: move to app?
const headCells = [
	{ id: 'type', numeric: false, disablePadding: true, label: 'Type' },
	{ id: 'accountName', numeric: true, disablePadding: false, label: 'AccountName' },
	{ id: 'status', numeric: false, disablePadding: false, label: 'Status' },
	{ id: 'currency', numeric: false, disablePadding: false, label: 'Currency' },
	{ id: 'balance', numeric: true, disablePadding: false, label: 'Balance' },
];

const Invoice = () => {
	const [invoices, setInvoices] = useState([]);
	const [invoiceDetail, setInvoiceDetail] = useState('');
	const [trackIndex, setTrackIndex] = useState(-1);
	const [sortAndDirection, setSortAndDirections] = useState({ columnToSort: '', sortDirection: 'desc' });
	const invertDirection = { asc: 'desc', desc: 'asc' };

	/* console.log(
		filter(invoices, (invoice) => {
			return invoice.accountName.includes("wol");
		})
	); */

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
		<div>
			return (
			<Grid container component="main">
				<Grid item xs={10} component={Paper} elevation={6}>
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
					)}
				</Grid>
				<Grid item xs={2}>
					<SimpleMenu />
					<InvoiceDetail
						invoiceDetail={invoiceDetail}
						setInvoiceDetail={setInvoiceDetail}
						setTrackIndex={setTrackIndex}
					/>
				</Grid>
			</Grid>
			);
		</div>
	);
};

export default Invoice;