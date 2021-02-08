import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(() => ({
	root: {
		cursor: 'pointer',
		position: 'absolute',
		right: '2em',
		top: '3em',
	},
}));

const SimpleMenu = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Button>
				<MenuIcon />
			</Button>
		</div>
	);
};

export default SimpleMenu;
