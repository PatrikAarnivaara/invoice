import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const CloseButton = ({ closeOnClick, resetIndex }) => {
	const handleClose = () => {
		closeOnClick('');
		resetIndex(-1);
	};

	return (
		<IconButton aria-label="close card" onClick={handleClose}>
			<CloseIcon />
		</IconButton>
	);
};

export default CloseButton;
