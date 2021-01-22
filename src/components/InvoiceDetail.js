import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CloseButton from '../UI/CloseButton';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: '30vh',
	},
	media: {
		height: 140,
	},
}));

const InvoiceDetail = ({ invoiceDetail, setInvoiceDetail, setTrackIndex }) => {
	const classes = useStyles();
	const { type, accountName, status, currency, balance } = invoiceDetail;

	return (
		<div className={classes.wrapper}>
			{invoiceDetail !== '' && (
				<React.Fragment>
					<Card className={classes.root}>
						<CardActionArea>
							<CardMedia
								className={classes.media}
								image="https://images.unsplash.com/photo-1600985325748-3985be662a62?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
								title="Biden"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									{accountName.replace(/\d(?!\d{4})/g, '*').toUpperCase()}
								</Typography>
								<Grid container component="main">
									<Grid item xs={6}>
										<Typography variant="body1" color="textPrimary" component="p">
											Type
										</Typography>
										<Typography variant="body2" color="textSecondary" component="p">
											{type}
										</Typography>
										<Typography variant="body1" color="textPrimary" component="p">
											Status
										</Typography>
										<Typography variant="body2" color="textSecondary" component="p">
											{status}
										</Typography>
										<Typography variant="body1" color="textPrimary" component="p">
											Balance
										</Typography>
										<Typography variant="body2" color="textSecondary" component="p">
											{balance}
										</Typography>
									</Grid>
									<Grid item xs={6}>
										<Typography variant="body1" color="textPrimary" component="p">
											Account Name
										</Typography>
										<Typography variant="body2" color="textSecondary" component="p">
											{accountName.replace(/\d(?!\d{4})/g, '*').toUpperCase()}
										</Typography>
										<Typography variant="body1" color="textPrimary" component="p">
											Currency
										</Typography>
										<Typography variant="body2" color="textSecondary" component="p">
											{currency}
										</Typography>
										<Typography variant="body1" color="textPrimary" component="p">
											Notes
										</Typography>
										<Typography variant="body2" color="textSecondary" component="p">
											Lorem Ipsum
										</Typography>
									</Grid>
								</Grid>
							</CardContent>
						</CardActionArea>
						<CardActions></CardActions>
					</Card>
					<CloseButton closeOnClick={setInvoiceDetail} setTrackIndex={setTrackIndex}></CloseButton>
				</React.Fragment>
			)}
		</div>
	);
};

export default InvoiceDetail;
