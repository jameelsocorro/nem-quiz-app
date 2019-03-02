import React, { Component, Fragment } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { validateUserQuiz, getUserQuizzes } from "../actions/user-quiz";
import { getQuizSummary } from "../actions/quiz";

import { withStyles } from '@material-ui/core/styles';
import { NemNavBar, Box, NemQuizCard, NemQuizItem } from "../components";
import { Button } from '@material-ui/core';

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
        filter: 'all',
        type: 0
    }

    componentWillMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        const { quizid } = this.props.match.params;

        this.props.validateUserQuiz(user.userid, quizid).then(() => {
            if (!this.props.hasUserQuiz) {
                this.props.history.push(`/home`);
            } else {
                this.props.getQuizSummary(user.userid, quizid).then(() => {
                    if (!this.props.quizSummary) {
                        this.props.history.push(`/quiz/${quizid}`);
                    }
                });
            }
        });
    }

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        const { quizid } = this.props.match.params;

        this.props.getUserQuizzes(user.userid, quizid, true);
    }

    filterItems(filter) {
        this.setState({ filter });
    }

    render() {
        const { classes, quizSummary, userQuizzes } = this.props;

        let filteredItems = userQuizzes;

        switch (this.state.filter) {
            case 'correct':
                filteredItems = userQuizzes.filter(item => item.correct);
                break;
            case 'incorrect':
                filteredItems = userQuizzes.filter(item => !item.correct);
                break;
        }

        return (
            <Fragment>
                {
                    quizSummary &&
                    <Box className={classes.root}
                        display="flex" flexDirection="column">
                        <NemNavBar></NemNavBar>
                        <Box className={classes.container}>
                            <NemQuizCard
                                summary
                                className={classes.quizCard}
                                title={quizSummary.title}
                                description={quizSummary.description}
                                quiztype={quizSummary.quiztype}
                                score={quizSummary.score}
                                cardImage={require(`../assets/images/${quizSummary.imagesrc}`)}>
                            </NemQuizCard>
                        </Box>
                    </Box>
                }
                {
                    (filteredItems && filteredItems.length > 0) &&
                    <Box className={classes.quizItems}>
                        <Box mb={2} display="flex" alignItems="center" justifyContent="center">
                            <Button color={this.state.filter === 'all' ? 'primary' : 'default'}
                                onClick={() => this.filterItems('all')}
                                className={classes.buttonFilter}>All</Button>
                            <Button color={this.state.filter === 'correct' ? 'primary' : 'default'}
                                onClick={() => this.filterItems('correct')}
                                className={classes.buttonFilter}>Correct</Button>
                            <Button color={this.state.filter === 'incorrect' ? 'primary' : 'default'}
                                onClick={() => this.filterItems('incorrect')}
                                className={classes.buttonFilter}>Incorrect</Button>
                        </Box>
                        <Box>
                            {
                                filteredItems.map(quiz => {
                                    return (
                                        <NemQuizItem finished key={quiz.quizitemid} data={quiz}></NemQuizItem>
                                    )
                                })
                            }
                        </Box>
                    </Box>
                }

            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    const { hasUserQuiz, userQuizzes } = state.userQuiz;
    const { quizSummary } = state.quiz;

    let error = null;

    if (state.quiz.error) {
        error = state.quiz.error;
    } else if (state.userQuiz.error) {
        error = state.userQuiz.error;
    }

    return {
        userQuizzes,
        hasUserQuiz,
        quizSummary,
        error
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { validateUserQuiz, getUserQuizzes, getQuizSummary },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(QuizSummary));
