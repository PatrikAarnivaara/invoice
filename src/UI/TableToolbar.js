import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import FilterListIcon from '@material-ui/icons/FilterList';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		paddingTop: '1em',
		paddingBottom: '1em',
	},
	filter: {
		flexGrow: 1,
	},
}));

const TableToolbar = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Toolbar variant="regular" disableGutters>
				<Typography className={classes.filter} variant="h5" color="primary">
					All invoices - {new Date().getFullYear()}
				</Typography>
				<Tooltip title="Filter list under development...">
					<IconButton aria-label="filter list" color="primary">
						<FilterListIcon />
					</IconButton>
				</Tooltip>
			</Toolbar>
		</div>
	);
};

export default TableToolbar;
