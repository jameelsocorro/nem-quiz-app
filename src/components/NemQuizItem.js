import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, NemButton } from "../components";
import { Typography, Link, Button } from '@material-ui/core';

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
    quizItemContainer: {
        maxWidth: theme.maxWidth,
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box'
    },
    logo: {
        width: '150px',
        marginTop: theme.spacing.unit * 1,
    },
    answers: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing.unit * 4
    },
    answerButton: {
        marginBottom: theme.spacing.unit * 2,
        padding: '9px 40px',
        borderRadius: '4px',
        minHeight: '44px'
    },
    answerDescription: {
        maxWidth: '230px',
        marginTop: theme.spacing.unit * 4,
        marginBottom: theme.spacing.unit,
    },
    itemButton: {
        maxWidth: '200px'
    },
    correctAnswerColor: {
        color: theme.palette.primary.main,
    },
    wrongAnswerColor: {
        color: theme.palette.red[500]
    }
});

class NemQuizItem extends Component {
    state = {
        isLoading: false,
        selectedItem: null
    }

    onAnswerChanged = id => {
        this.setState({ selectedItem: id });
    }

    onSubmitAnswer = e => {
        e.preventDefault();

        if (!this.props.finished) {

        }
    }

    render() {
        const { data, classes, finished } = this.props;
        const isFormValid = this.state.selectedItem !== null;
        return (
            <Box className={classes.quizItemContainer} p={4}>
                <form className={classes.form} onSubmit={this.onSubmitAnswer}>
                    <Typography gutterBottom align="center" variant="h5" component="h2">
                        {data.question}
                    </Typography>
                    <img className={classes.logo} src={require(`../assets/images/${data.logo}`)} alt="" />
                    {
                        finished &&
                        <Fragment>
                            <div className={classes.answers}>
                                {
                                    data.userAnswer === data.correctAnswer ?
                                        <Box className={classes.correctAnswerColor} display="flex" alignItems="center">
                                            <Box mr={1}>
                                                <Typography variant="body2">
                                                    {data.userAnswer}
                                                </Typography>
                                            </Box>
                                            <Box><CheckIcon></CheckIcon></Box>
                                        </Box>
                                        :
                                        <Fragment>
                                            <Box className={classes.correctAnswerColor} display="flex" alignItems="center">
                                                <Box mr={1}>
                                                    <Typography variant="body2">
                                                        {data.correctAnswer}
                                                    </Typography>
                                                </Box>
                                                <Box><CheckIcon></CheckIcon></Box>
                                            </Box>
                                            <Box className={classes.wrongAnswerColor} mt={1} display="flex" alignItems="center">
                                                <Box mr={1}>
                                                    <Typography variant="body2">
                                                        {data.userAnswer}
                                                    </Typography>
                                                </Box>
                                                <Box><CloseIcon></CloseIcon></Box>
                                            </Box>
                                        </Fragment>
                                }
                            </div>
                            <Typography className={classes.answerDescription} gutterBottom>
                                {data.description} <Link href={data.link} className={classes.website}>Learn More</Link>
                            </Typography>
                        </Fragment>
                    }
                    {
                        !finished &&
                        <Fragment>
                            <div className={classes.answers}>
                                {
                                    data.items.map(item => {
                                        return (
                                            <Button
                                                key={item.id}
                                                variant="outlined"
                                                className={classes.answerButton}
                                                color={item.id === this.state.selectedItem ? 'primary' : 'default'}
                                                onClick={() => this.onAnswerChanged(item.id)}>
                                                {item.title}
                                            </Button>
                                        )
                                    })
                                }
                            </div>
                            <NemButton
                                mt={4}
                                mb={1}
                                className={classes.itemButton}
                                disabled={!isFormValid || this.state.isLoading}
                                type="submit"
                                text="Next">
                            </NemButton>
                        </Fragment>
                    }
                    <Typography variant="caption" gutterBottom align="center">
                        Question 1 of 10
                    </Typography>
                </form>
            </Box>
        );
    }
}

export default withStyles(styles)(NemQuizItem);
