import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import FilterListIcon from '@material-ui/icons/FilterList';
import IconButton from '@material-ui/core/IconButton';

const TableToolbar = () => {
	return (
		<Toolbar variant="regular">
			<Typography variant="h5" color="primary">
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
