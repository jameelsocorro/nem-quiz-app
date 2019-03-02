import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { validateUserQuiz, getCurrentUserQuiz, getUserQuizItems, updateUserQuizAnswer } from "../actions/user-quiz";
import { getQuizSummary, generateQuizSummary } from "../actions/quiz";

import { NemNavBar, Box, NemQuizItem } from "../components";

const styles = theme => ({
    root: {
        height: '100vh'
    },
    container: {
        overflow: 'auto'
    }
});

class Quiz extends Component {
    state = {
        loading: false,
        quizItem: null
    }

    componentWillMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        const { quizid } = this.props.match.params;

        this.props.validateUserQuiz(user.userid, quizid).then(() => {
            if (!this.props.hasUserQuiz) {
                this.props.history.push(`/home`);
            }
        });
    }

    componentDidMount() {
        this.getCurrentUserQuiz();
    }

    getCurrentUserQuiz() {
        const user = JSON.parse(localStorage.getItem('user'));
        const { quizid } = this.props.match.params;

        this.props.getCurrentUserQuiz(user.userid, quizid).then(() => {

            const { currentUserQuiz } = this.props;

            if (currentUserQuiz) {
                this.props.getUserQuizItems(currentUserQuiz.userquizid).then(() => {

                    const { userQuizItems } = this.props;

                    let userQuiz = currentUserQuiz;
                    userQuiz.options = userQuizItems;

                    this.setState({ quizItem: userQuiz });
                });
            }
            else {
                this.props.history.push(`/quizSummary/${quizid}`);
            }

        });
    }

    onSubmitAnswer(quizanswer) {
        const userAnswer = quizanswer.toString();
        this.props.updateUserQuizAnswer(this.props.currentUserQuiz.userquizid, this.props.currentUserQuiz.quizitemid, userAnswer).then(() => {

            if (this.props.currentUserQuiz.itemsequence === 10) {
                const user = JSON.parse(localStorage.getItem('user'));
                const { quizid } = this.props.match.params;

                this.props.generateQuizSummary(user.userid, quizid).then(() => {
                    this.props.history.push(`/quizSummary/${quizid}`);
                });
            }
            else {
                this.getCurrentUserQuiz();
            }
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <Box className={classes.root}
                display="flex" flexDirection="column">
                <NemNavBar noShadow></NemNavBar>
                {
                    this.state.quizItem &&
                    <Box className={classes.container}>
                        <NemQuizItem data={this.state.quizItem} onSubmitAnswer={this.onSubmitAnswer.bind(this)}></NemQuizItem>
                    </Box>
                }
            </Box>
        );
    }
}

function mapStateToProps(state) {
    const { currentUserQuiz, userQuizItems, hasUserQuiz } = state.userQuiz;
    const { quizSummary } = state.quiz;

    let error = null;

    if (state.quiz.error) {
        error = state.quiz.error;
    } else if (state.userQuiz.error) {
        error = state.userQuiz.error;
    }

    return {
        currentUserQuiz,
        userQuizItems,
        hasUserQuiz,
        quizSummary,
        error
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { validateUserQuiz, getCurrentUserQuiz, getUserQuizItems, updateUserQuizAnswer, getQuizSummary, generateQuizSummary },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Quiz));
