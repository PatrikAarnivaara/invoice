import React, { useEffect, useState } from 'react';
import { orderBy } from 'lodash';
import mockApi from '../api/mockApi';
import InvoiceTable from './InvoiceTable';
import InvoiceDetail from './InvoiceDetail';
import SimpleMenu from '../UI/SimpleMenu';
import { Grid, Paper } from '@material-ui/core';

const headCells = [
	{ id: 'type', label: 'Type' },
	{ id: 'accountName', label: 'AccountName' },
	{ id: 'status', label: 'Status' },
	{ id: 'currency', label: 'Currency' },
	{ id: 'balance', label: 'Balance' },
];

const Invoice = () => {
	const [invoices, setInvoices] = useState([]);
	const [invoiceDetail, setInvoiceDetail] = useState('');
	const [handleHover, setHandleHover] = useState(true);
	const [trackIndex, setTrackIndex] = useState(-1);
	const [sortAndDirection, setSortAndDirection] = useState({ columnToSort: '', sortDirection: 'desc' });
	const invertDirection = { asc: 'desc', desc: 'asc' };

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
		setSortAndDirection({
			...sortAndDirection,
			columnToSort: columnId,
			sortDirection:
				sortAndDirection.columnToSort === columnId ? invertDirection[sortAndDirection.sortDirection] : 'asc',
		});
	};

	return (
		<div>
			<Grid container component="main">
				<Grid item xs={12} component={Paper} elevation={6}>
					{invoices && (
						<InvoiceTable
							invoices={orderBy(invoices, sortAndDirection.columnToSort, sortAndDirection.sortDirection)}
							displayInvoiceDetail={displayInvoiceDetail}
							setInvoiceDetail={setInvoiceDetail}
							trackIndex={trackIndex}
							setTrackIndex={setTrackIndex}
							headCells={headCells}
							handleSort={handleSort}
							columnToSort={sortAndDirection.columnToSort}
							sortDirection={sortAndDirection.sortDirection}
							handleHover={handleHover}
							setHandleHover={setHandleHover}
						/>
					)}
				</Grid>
				<Grid item xs={false}>
					<SimpleMenu />
					<InvoiceDetail
						invoiceDetail={invoiceDetail}
						setInvoiceDetail={setInvoiceDetail}
						setTrackIndex={setTrackIndex}
						setHandleHover={setHandleHover}
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default Invoice;
