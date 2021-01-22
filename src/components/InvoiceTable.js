import React from 'react';
import InvoiceTableItem from './InvoiceTableItem';
import { makeStyles } from '@material-ui/core/styles';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TableSortLabel,
	Paper,
} from '@material-ui/core';

const useStyles = makeStyles({
	table: {
		minWidth: '50vw',
	},
});

const TableDisplay = ({
	invoices,
	displayInvoiceDetail,
	trackIndex,
	setTrackIndex,
	headCells,
	handleSort,
	columnToSort,
	sortDirection,
}) => {
	const classes = useStyles();


	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="caption table">
				<TableHead>
					<TableRow>
						{headCells.map((header, index) => (
							<TableCell key={index} onClick={() => handleSort(header.id)}>
								{header.label}
								<TableSortLabel
									active
									direction={header.id === columnToSort ? sortDirection : 'desc'}
								></TableSortLabel>
							</TableCell>
						))}
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
