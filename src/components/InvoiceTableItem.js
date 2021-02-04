import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import { TableCell, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	selectedRow: {
		backgroundColor: '#ffebee',
		border: '8px solid',
		borderColor: '#e3a6b2',
		borderBottom: '0',
		borderTop: '0',
		borderRight: '0',
	},
}));

const InvoiceTableItem = ({
	index,
	id,
	type,
	accountName,
	status,
	currency,
	balance,
	displayInvoiceDetail,
	selected,
	setTrackIndex,
}) => {
	const classes = useStyles();
	const [handleHover, setHandleHover] = useState(true);

	const handleOnClickItem = () => {
		setHandleHover(false);
		displayInvoiceDetail(id, type, accountName, status, currency, balance);
		setTrackIndex(id);
	};

	return (
		<TableRow
			key={index}
			className={selected ? classes.selectedRow : ''}
			onClick={handleOnClickItem}
			hover={handleHover}
			onMouseOut={() => setHandleHover(true)}
		>
			<TableCell component="th" scope="row">
				{type}
			</TableCell>
			<TableCell align="left">{accountName.replace(/\d(?!\d{4})/g, '*').toUpperCase()}</TableCell>
			<TableCell align="left">{status}</TableCell>
			<TableCell align="left">{currency}</TableCell>
			<TableCell align="left">
				<NumberFormat value={balance} displayType={'text'} thousandSeparator={true} prefix={'$'} />
			</TableCell>
		</TableRow>
	);
};

export default InvoiceTableItem;
