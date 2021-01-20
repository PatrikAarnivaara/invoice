import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
	close: {
		cursor: 'pointer',
	},
}));

const InvoiceDetail = ({ invoiceDetail, setInvoiceDetail }) => {
	const classes = useStyles();
	console.log(invoiceDetail);

	const { type, accountName, status, currency, balance } = invoiceDetail;

	const closeDetail = () => {
		setInvoiceDetail('');
	};

	return (
		<div>
			{invoiceDetail !== '' && (
				<div>
					<Card className={classes.root}>
						<CardActionArea>
							<CardMedia
								className={classes.media}
								image="https://images.unsplash.com/photo-1600985325748-3985be662a62?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
								title="Biden"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									{accountName}
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									{type}
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									{status}
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									{currency}
								</Typography>
								<Typography variant="body1" color="textPrimary" component="p">
									Balance
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									{balance}
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Notes
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary" className={classes.close} onClick={closeDetail}>
								X
							</Button>
						</CardActions>
					</Card>
				</div>
			)}
		</div>
	);
};

export default InvoiceDetail;

/* 


  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1600985325748-3985be662a62?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
          title="Biden"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {accountName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" className={classes.close} onClick={closeDetail}>
          X
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
 */
