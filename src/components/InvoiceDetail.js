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
		minWidth: 365,
	},
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: '30vh',
	},
	media: {
		minHeight: 140,
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
								<Typography gutterBottom variant="h6" component="h2">
									{accountName.replace(/\d(?!\d{4})/g, '*').toUpperCase()}
								</Typography>
								<Grid container component="main">
									<Grid item xs={6}>
										<Typography variant="overline" color="textPrimary" >
											Type
										</Typography>
										<Typography variant="body2" color="textSecondary" p={1}>
											{type}
										</Typography>
										<Typography variant="overline" color="textPrimary">
											Status
										</Typography>
										<Typography variant="body2" color="textSecondary">
											{status}
										</Typography>
										<Typography variant="overline" color="textPrimary">
											Balance
										</Typography>
										<Typography variant="body2" color="textSecondary">
											{balance}
										</Typography>
									</Grid>
									<Grid item xs={6}>
										<Typography variant="overline" color="textPrimary">
											Account Name
										</Typography>
										<Typography variant="body2" color="textSecondary">
											{accountName.replace(/\d(?!\d{4})/g, '*').toUpperCase()}
										</Typography>
										<Typography variant="overline" color="textPrimary">
											Currency
										</Typography>
										<Typography variant="body2" color="textSecondary">
											{currency}
										</Typography>
										<Typography variant="overline" color="textPrimary" >
											Notes
										</Typography>
										<Typography variant="body2" color="textSecondary">
											Lorem Ipsum
										</Typography>
									</Grid>
								</Grid>
							</CardContent>
						</CardActionArea>
						<CardActions></CardActions>
					</Card>
					<CloseButton closeOnClick={setInvoiceDetail} resetIndex={setTrackIndex}></CloseButton>
				</React.Fragment>
			)}
		</div>
	);
};

export default InvoiceDetail;
