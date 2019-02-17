import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { NemQuizCard, NemNavBar, Box } from "../components";

const quizzes = [
    {
        id: 1,
        type: 'Logo',
        title: 'NEM Ecosystem',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageSrc: 'quiz-card.jpeg'
    },
    {
        id: 2,
        type: 'General',
        title: 'Test Quiz 2',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageSrc: 'quiz-card.jpeg'
    },
    {
        id: 3,
        type: 'Logo',
        title: 'Test Quiz 3',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageSrc: 'quiz-card.jpeg'
    },
    {
        id: 4,
        type: 'Logo',
        title: 'Test Quiz 4',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageSrc: 'quiz-card.jpeg'
    },
    {
        id: 5,
        type: 'Logo',
        title: 'Test Quiz 5',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageSrc: 'quiz-card.jpeg'
    }
];

const styles = theme => ({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.background.default
    },
    cardContainer: {
        flexGrow: 2,
        paddingBottom: 0,
        maxWidth: theme.maxWidth,
        margin: 'auto',

        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            alignContent: 'flex-start',
            flexWrap: 'wrap',
            paddingRight: 0,
            overflow: 'auto'
        }
    }
});

class Home extends Component {
    state = {}

    onQuizClick = quiz => {
        this.props.history.push(`/quiz/${quiz.id}/1`)
    }

    render() {
        const self = this;
        return (
            <Box className={this.props.classes.root}
                    display="flex" flexDirection="column">
                <NemNavBar></NemNavBar>
                <Box className={this.props.classes.cardContainer} p={2}>
                {
                    quizzes.map(function (quiz, index) {
                        return (
                            <NemQuizCard
                                onClick={() => self.onQuizClick(quiz)}
                                key={index} {...quiz}
                                cardImage={require(`../assets/images/${quiz.imageSrc}`)}>
                            </NemQuizCard>
                        )
                    })
                }
                </Box>
            </Box>
        );
    }
}

export default withStyles(styles)(Home);
