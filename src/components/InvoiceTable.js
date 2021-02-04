import React from 'react';
import InvoiceTableItem from './InvoiceTableItem';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TableSortLabel,
	Typography,
} from '@material-ui/core';

const InvoiceTable = ({
	invoices,
	displayInvoiceDetail,
	trackIndex,
	setTrackIndex,
	headCells,
	handleSort,
	columnToSort,
	sortDirection,
}) => {
	return (
		<div>
			<TableContainer>
				<Typography variant="subtitle1" gutterBottom>
					Invoices
				</Typography>
				<Table aria-label="caption table">
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
		</div>
	);
};

export default InvoiceTable;
