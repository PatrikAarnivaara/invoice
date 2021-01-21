import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import { makeStyles } from '@material-ui/core/styles';
import { TableCell, TableRow } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		cursor: 'pointer',
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

	const handleOnClickItem = () => {
		displayInvoiceDetail(id, type, accountName, status, currency, balance);
		setTrackIndex(id);
	};

	return (
		<TableRow key={index} className={classes.root} selected={selected} hover onClick={handleOnClickItem}>
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
