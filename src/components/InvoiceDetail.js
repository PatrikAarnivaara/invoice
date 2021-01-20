import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	closeCard: {
		cursor: 'pointer',
	},
}));

const InvoiceDetail = ({ invoiceDetail, setInvoiceDetail }) => {
	const classes = useStyles();
	console.log(invoiceDetail);

	const { type, accountName, status, currency, balance } = invoiceDetail;

	const closeDetail = () => {
		setInvoiceDetail('');
	};

	return (
		<div>
			<h4>{type}</h4>
			<h4>{accountName}</h4>
			<h4>{status}</h4>
			<h4>{currency}</h4>
			<h4>{balance}</h4>
			{invoiceDetail !== '' && (
				<h1 className={classes.closeCard} onClick={closeDetail}>
					X
				</h1>
			)}
		</div>
	);
};

export default InvoiceDetail;
