import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Toolbar, Typography } from '@material-ui/core/';
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		paddingTop: '1em',
		paddingBottom: '1em',
	},
	title: {
		flexGrow: 1,
		color: '#d6677c',
	},
	filter: {
		color: '#d6677c',
	},
}));

const TableToolbar = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Toolbar variant="regular" disableGutters>
				<Typography className={classes.title} variant="h6">
					All invoices - {new Date().getFullYear()}
				</Typography>
				<IconButton aria-label="filter list" className={classes.filter}>
					<FilterListIcon />
				</IconButton>
			</Toolbar>
		</div>
	);
};

export default TableToolbar;
