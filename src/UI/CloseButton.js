import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(() => ({
	icon: {
		fontSize: '2rem',
		color: '#fafafa',
		opacity: 0.8,
	},
	close: {
		cursor: 'pointer',
		marginTop: '1em',
	},
}));

const CloseButton = ({ closeOnClick }) => {
	const classes = useStyles();

	const handleClose = () => {
		closeOnClick('');
	};

	return (
		<Button className={classes.close} onClick={handleClose}>
			<CloseIcon className={classes.icon} />
		</Button>
	);
};

export default CloseButton;
