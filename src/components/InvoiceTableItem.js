import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import { TableCell, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	selectedRow: {
		backgroundColor: '#ffebee',
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
	setInvoiceDetail,
}) => {
	const classes = useStyles();
	const [handleHover, setHandleHover] = useState(true);

	const handleOnClickItem = () => {
		setHandleHover(false);
		displayInvoiceDetail(id, type, accountName, status, currency, balance);
		setTrackIndex(id);

		if (selected) {
			setTrackIndex(-1);
			setInvoiceDetail('');
			console.log(handleHover);
			setHandleHover(true); 
		}
	};

	return (
		<TableRow
			key={index}
			className={selected ? classes.selectedRow : ''}
			onClick={handleOnClickItem}
			hover={handleHover}
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
