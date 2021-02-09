import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const CloseButton = ({ setInvoiceDetail, resetIndex, setHandleHover }) => {
	const handleClose = () => {
		setInvoiceDetail('');
		resetIndex(-1);
		setHandleHover(true);
	};

	return (
		<IconButton aria-label="close card" onClick={handleClose}>
			<CloseIcon color="primary" fontSize="large" />
		</IconButton>
	);
};

export default CloseButton;
