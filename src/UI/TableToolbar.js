import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import FilterListIcon from '@material-ui/icons/FilterList';
import IconButton from '@material-ui/core/IconButton';

const useToolbarStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
	},
	title: {
		flex: '1 1 100%',
	},
}));

const TableToolbar = () => {
	const classes = useToolbarStyles();

	return (
		<Toolbar className={classes.root}>
			<Typography className={classes.title} variant="h5" color="secondary">
				All invoices - {new Date().getFullYear()}
			</Typography>
			<Tooltip title="Filter list">
				<IconButton aria-label="filter list">
					<FilterListIcon />
				</IconButton>
			</Tooltip>
		</Toolbar>
	);
};

export default TableToolbar;
