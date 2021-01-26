import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	image: {
		height: '100vh',
		backgroundImage:
			'url(https://res.cloudinary.com/whatwherewhen/image/upload/v1610996874/samples/landscapes/z2ovbbi04028jmn0aj7l.jpg)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: "1em"
	},
}));

const BackgroundImage = () => {
	const classes = useStyles();
	return <Grid container className={classes.image}></Grid>;
};

export default BackgroundImage;
