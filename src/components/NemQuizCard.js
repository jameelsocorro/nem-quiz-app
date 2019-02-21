import React from 'react';

import { Card, CardHeader, IconButton, CardContent, Typography, withStyles, Tooltip } from '@material-ui/core';
import PlayCirleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { Box } from './Box';

const styles = theme => ({
	card: {
		display: 'flex',
		minHeight: '300px',
		maxHeight: '300px',
		flexDirection: 'column',
		justifyContent: 'space-between',
		marginBottom: theme.spacing.unit * 2,
		padding: theme.spacing.unit * 3,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		boxSizing: 'border-box'
	},
	cardHeader: {
		padding: 0
	},
	cardContent: {
		border: '2px solid #fff',
		borderRadius: theme.shape.borderRadius,
		padding: theme.spacing.unit * 2,
		marginBottom: theme.spacing.unit
	},
	scoreText: {
		color: '#fff',
		fontWeight: 800
	},
	textColor: {
		color: '#fff'
	}
});

const NemQuizCard = (props) => {

	function renderCardHeader(props) {

		if (props.summary) {
			return (
				<Box display="flex" alignItems="center" justifyContent="space-between">
					<Typography variant="button" gutterBottom>
						<b className={props.classes.textColor}>{props.type}</b>
					</Typography>
					<Typography className={props.classes.scoreText} component="h2" variant="headline" gutterBottom>
						{props.score}/10
					</Typography>
				</Box>
			)
		}

		return (
			<CardHeader
				className={props.classes.cardHeader}
				action={
					<Tooltip title="Start Quiz">
						<IconButton className={props.classes.textColor}>
							<PlayCirleOutlineIcon />
						</IconButton>
					</Tooltip>
				}
				title={
					<Typography variant="button" gutterBottom>
						<b className={props.classes.textColor}>{props.type}</b>
					</Typography>
				}
			/>

		)
	}

	return (
		<Card raised={true} onClick={props.onClick} className={`${props.classes.card} ${props.className}`} style={{
			backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.64)),
        url(${props.cardImage})`
		}}>

			{renderCardHeader(props)}

			<CardContent className={props.classes.cardContent}>
				<Typography gutterBottom variant="h5" component="h2" className={props.classes.textColor}>
					{props.title}
				</Typography>
				<Typography variant="body1" gutterBottom className={props.classes.textColor}>
					{props.description}
				</Typography>
			</CardContent>

		</Card>
	)

};

export default withStyles(styles)(NemQuizCard);
