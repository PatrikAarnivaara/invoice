import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import NumberFormat from 'react-number-format';

const useStyles = makeStyles({
	table: {
		minWidth: '50vw',
		cursor: 'pointer',
	},
});

const TableDisplay = ({ invoices }) => {
	console.log(invoices);

	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="caption table">
				<TableHead>
					<TableRow>
						<TableCell>Type</TableCell>
						<TableCell align="left">Account Name</TableCell>
						<TableCell align="left">Status</TableCell>
						<TableCell align="left">Currency</TableCell>
						<TableCell align="left">Balance</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{invoices.map((invoice) => (
						<TableRow key={invoice.id}>
							<TableCell component="th" scope="row">
								{invoice.type}
							</TableCell>
							<TableCell align="left">{invoice.accountName.replace(/\d(?!\d{4})/g, "*").toUpperCase()}</TableCell>
							<TableCell align="left">{invoice.status}</TableCell>
							<TableCell align="left">{invoice.currency}</TableCell>
							<TableCell align="left">
								<NumberFormat
									value={invoice.balance}
									displayType={'text'}
									thousandSeparator={true}
									prefix={'$'}
								/>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default TableDisplay;
