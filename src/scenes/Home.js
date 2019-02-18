import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { NemQuizCard, NemNavBar, Box } from "../components";

const quizzes = [
    {
        id: 1,
        type: 'Logo Quiz',
        title: 'NEM Ecosystem',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageSrc: 'nem-ecosystem.png'
    },
    {
        id: 2,
        type: 'General Knowledge',
        title: 'Test Quiz 2',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageSrc: 'general-knowledge.png'
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
    },
    card: {
        cursor: 'pointer',
        transition: '0.3s all ease-in-out',

        '&:hover': {
            boxShadow: theme.shadows[12],
        },

        [theme.breakpoints.up('sm')]: {
            marginRight: theme.spacing.unit * 2,
            width: `calc(50% - ${theme.spacing.unit * 2}px)`
        },

        [theme.breakpoints.up('md')]: {
            width: `calc(${100 / 3}% - ${theme.spacing.unit * 2}px)`
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
        const { classes } = this.props;
        return (
            <Box className={classes.root}
                    display="flex" flexDirection="column">
                <NemNavBar></NemNavBar>
                <Box className={classes.cardContainer} p={2}>
                {
                    quizzes.map(function (quiz, index) {
                        return (
                            <NemQuizCard
                                className={classes.card}
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
