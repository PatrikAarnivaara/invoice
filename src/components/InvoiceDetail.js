import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CloseButton from '../UI/CloseButton';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: '18vh',
		marginLeft: '10vw',
		position: 'absolute',
	},
}));

const InvoiceDetail = ({ invoiceDetail, setInvoiceDetail, setTrackIndex }) => {
	const classes = useStyles();
	const { type, accountName, status, currency, balance } = invoiceDetail;

	return (
		<div>
			{invoiceDetail !== '' && (
				<div className={classes.root}>
					<Card raised>
						<CardActionArea>
							<CardMedia
								component="img"
								image="https://images.unsplash.com/photo-1600985325748-3985be662a62?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
								title="Biden"
							/>
							<CardContent>
								<Typography gutterBottom variant="h6">
									{accountName.replace(/\d(?!\d{4})/g, '*').toUpperCase()}
								</Typography>
								<Grid container>
									<Grid item xs={6}>
										<Typography variant="overline">Type</Typography>
										<Typography variant="body2" p={1}>
											{type}
										</Typography>
										<Typography variant="overline">Status</Typography>
										<Typography variant="body2">{status}</Typography>
										<Typography variant="overline">Balance</Typography>
										<Typography variant="body2">{balance}</Typography>
									</Grid>
									<Grid item xs={6}>
										<Typography variant="overline">Account Name</Typography>
										<Typography variant="body2">
											{accountName.replace(/\d(?!\d{4})/g, '*').toUpperCase()}
										</Typography>
										<Typography variant="overline">Currency</Typography>
										<Typography variant="body2">{currency}</Typography>
										<Typography variant="overline">Notes</Typography>
										<Typography variant="body2">Lorem Ipsum</Typography>
									</Grid>
								</Grid>
							</CardContent>
						</CardActionArea>
					</Card>
					<CloseButton closeOnClick={setInvoiceDetail} resetIndex={setTrackIndex}></CloseButton>
				</div>
			)}
		</div>
	);
};

InvoiceDetail.propTypes = {
	invoiceDetail: PropTypes.object,
	setInvoiceDetail: PropTypes.func,
	setTrackIndex: PropTypes.func,
};

export default InvoiceDetail;
