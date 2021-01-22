import React, { useState } from 'react';
import InvoiceTableItem from './InvoiceTableItem';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const useStyles = makeStyles({
	table: {
		minWidth: '50vw',
	},
});

const TableDisplay = ({ invoices, displayInvoiceDetail }) => {
	const classes = useStyles();
	const [trackIndex, setTrackIndex] = useState(-1);

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="caption table">
				<TableHead>
					<TableRow>
						<TableCell>Type</TableCell>
						<TableCell align="left">Account Name</TableCell>
						<TableCell align="left">Status</TableCell>
						<TableCell align="left">Currency</TableCell>
						<TableCell align="left">Balance</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{invoices.map((invoice, index) => (
						<InvoiceTableItem
							key={index}
							id={invoice.id}
							type={invoice.type}
							accountName={invoice.accountName}
							status={invoice.status}
							currency={invoice.currency}
							balance={invoice.balance}
							displayInvoiceDetail={displayInvoiceDetail}
							selected={invoice.id === trackIndex}
							setTrackIndex={setTrackIndex}
						/>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default TableDisplay;