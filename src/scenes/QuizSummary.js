import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { NemNavBar, Box, NemButton, NemQuizCard } from "../components";
import { Typography, RadioGroup, FormControlLabel, Radio, Link, Button } from '@material-ui/core';

const quiz = {
    id: 1,
    type: 'Logo Quiz',
    title: 'NEM Ecosystem',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imageSrc: 'nem-ecosystem.png',
    score: 3
};

const styles = theme => ({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.background.default
    },
    container: {
        maxWidth: theme.maxWidth,
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    quizItems: {

    },
    buttonFilter: {
        width: '200px'
    }
});

class QuizSummary extends Component {
    state = {
        isLoading: false
    }

    render() {
        const { classes } = this.props;
        return (
            <Box className={classes.root}
                display="flex" flexDirection="column">
                <NemNavBar></NemNavBar>
                <Box p={2} className={classes.container}>
                    <NemQuizCard summary {...quiz} cardImage={require(`../assets/images/${quiz.imageSrc}`)}></NemQuizCard>
                    <Box className={classes.quizItems}>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Button className={classes.buttonFilter}>All</Button>
                            <Button className={classes.buttonFilter}>Correct</Button>
                            <Button className={classes.buttonFilter}>Incorrect</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        );
    }
}

export default withStyles(styles)(QuizSummary);
