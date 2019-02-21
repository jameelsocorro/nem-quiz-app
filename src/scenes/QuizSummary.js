import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { NemNavBar, Box, NemQuizCard, NemQuizItem } from "../components";
import { Button } from '@material-ui/core';

const quiz = {
    id: 1,
    type: 'Logo Quiz',
    title: 'NEM Ecosystem',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imageSrc: 'nem-ecosystem.png',
    score: 3
};

const quizzes = [
    {
        id: 1,
        question: 'Which NEM Ecosystem member is this?',
        logo: 'quiz-1-1.png',
        userAnswer: 'Location Core',
        correctAnswer: 'Location Core',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        website: 'Learn More'
    },
    {
        id: 2,
        question: 'Which NEM Ecosystem member is this?',
        logo: 'quiz-1-1.png',
        userAnswer: 'Location Core',
        correctAnswer: 'Loyal Coin',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        website: 'Learn More'
    },
    {
        id: 3,
        question: 'Which NEM Ecosystem member is this?',
        logo: 'quiz-1-1.png',
        userAnswer: 'Location Core',
        correctAnswer: 'Pantos',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        website: 'Learn More'
    }
];

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.default
    },
    container: {
        maxWidth: theme.maxWidth,
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    quizCard: {
        margin: theme.spacing.unit * 2
    },
    quizItems: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 2,
        flexGrow: 2
    },
    buttonFilter: {
        width: '200px'
    },
    logo: {
        height: '40px'
    }
});

class QuizSummary extends Component {
    state = {
        isLoading: false,
        filter: 'All',
        type: 0
    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Box className={classes.root}
                    display="flex" flexDirection="column">
                    <NemNavBar></NemNavBar>
                    <Box className={classes.container}>
                        <NemQuizCard summary {...quiz} className={classes.quizCard} cardImage={require(`../assets/images/${quiz.imageSrc}`)}></NemQuizCard>
                    </Box>
                </Box>
                <Box className={classes.quizItems}>
                    <Box mb={2} display="flex" alignItems="center" justifyContent="center">
                        <Button color={this.state.filter === 'All' ? 'primary' : 'default'}
                            onClick={() => this.setState({ filter: 'All' })}
                            className={classes.buttonFilter}>All</Button>
                        <Button color={this.state.filter === 'Correct' ? 'primary' : 'default'}
                            onClick={() => this.setState({ filter: 'Correct' })}
                            className={classes.buttonFilter}>Correct</Button>
                        <Button color={this.state.filter === 'Incorrect' ? 'primary' : 'default'}
                            onClick={() => this.setState({ filter: 'Incorrect' })}
                            className={classes.buttonFilter}>Incorrect</Button>
                    </Box>
                    <Box>
                        {
                            quizzes.map(quiz => {
                                return (
                                    <NemQuizItem finished key={quiz.id} data={quiz}></NemQuizItem>
                                )
                            })
                        }
                    </Box>
                </Box>
            </Fragment>
        );
    }
}

export default withStyles(styles)(QuizSummary);
