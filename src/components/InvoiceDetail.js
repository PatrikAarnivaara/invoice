import React from 'react';

const InvoiceDetail = ({ invoiceDetail }) => {
	console.log(invoiceDetail);
	const { type, accountName, status, currency, balance } = invoiceDetail;

	return (
		<div>
			<h4>{type}</h4>
            <h4>{accountName}</h4>
            <h4>{status}</h4>
            <h4>{currency}</h4>
            <h4>{balance}</h4>
		</div>
	);
};

export default InvoiceDetail;
