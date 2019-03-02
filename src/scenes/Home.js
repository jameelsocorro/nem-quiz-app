import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { NemQuizCard, NemNavBar, Box, NemScreenLoader, NemLoader } from "../components";

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getQuizzes } from "../actions/quiz";
import { generateRandomUserQuizzes, validateUserQuiz } from "../actions/user-quiz";

const styles = theme => ({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.background.default
    },
    cardContainer: {
        flexGrow: 2,
        paddingBottom: 0,
        width: '100%',
        maxWidth: theme.maxWidth,
        margin: 'auto',
        boxSizing: 'border-box',

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

    state = {
        loading: false,
        generatingUserQuiz: false
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.props.getQuizzes().then(() => {
            this.setState({ loading: false });
        });
    }

    onQuizClick = quiz => {
        const user = JSON.parse(localStorage.getItem('user'));

        this.props.validateUserQuiz(user.userid, quiz.quizid).then(() => {
            if (!this.props.hasUserQuiz) {
                this.setState({ generatingUserQuiz: true });
                this.props.generateRandomUserQuizzes(user.userid, quiz.quizid).then(() => {
                    this.setState({ generatingUserQuiz: false });
                    this.props.history.push(`/quiz/${quiz.quizid}`);
                });
            } else {
                this.props.history.push(`/quiz/${quiz.quizid}`);
            }
        });
    }

    render() {
        const self = this;
        const { classes } = this.props;
        return (
            <Fragment>
                {
                    this.state.generatingUserQuiz &&
                    <NemScreenLoader title='Generating User Quiz'></NemScreenLoader>
                }
                <Box className={classes.root}
                    display="flex" flexDirection="column">
                    <NemNavBar></NemNavBar>
                    {
                        this.state.loading ?
                            <NemLoader title='Getting Quizzes'></NemLoader>
                            :
                            <Box className={classes.cardContainer} p={2}>
                                {
                                    (this.props.quizzes && this.props.quizzes.length > 0) &&
                                    this.props.quizzes.map(function (quiz, index) {
                                        return (
                                            <NemQuizCard
                                                className={classes.card}
                                                onClick={() => self.onQuizClick(quiz)}
                                                key={index}
                                                title={quiz.title}
                                                description={quiz.description}
                                                quiztype={quiz.quiztype}
                                                cardImage={require(`../assets/images/${quiz.imagesrc}`)} />
                                        )
                                    })
                                }
                            </Box>
                    }
                </Box>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    const { quizzes } = state.quiz;
    const { generateSuccess, hasUserQuiz } = state.userQuiz;

    let error = null;

    if (state.quiz.error) {
        error = state.quiz.error;
    } else if (state.userQuiz.error) {
        error = state.userQuiz.error;
    }

    return {
        quizzes: quizzes || [],
        generateSuccess,
        hasUserQuiz,
        error
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { getQuizzes, generateRandomUserQuizzes, validateUserQuiz },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));
