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
            this.props.onSubmitAnswer(this.state.selectedItem);
            this.setState({ selectedItem: null });
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
                    <img className={classes.logo} src={require(`../assets/images/logo-quiz/${data.imagesrc}`)} alt="" />
                    {
                        finished &&
                        <Fragment>
                            <div className={classes.answers}>
                            {
                                data.answers.map((a, index) => {
                                    return (
                                        <Box key={index} className={a.quizitemid === data.quizitemid ? classes.correctAnswerColor: classes.wrongAnswerColor}
                                            display="flex" alignItems="center">
                                            <Box mr={1}>
                                                <Typography variant="body2">
                                                    {a.answer}
                                                </Typography>
                                            </Box>
                                            <Box>
                                                {
                                                    a.quizitemid === data.quizitemid ?
                                                    <CheckIcon></CheckIcon> : <CloseIcon></CloseIcon>
                                                }
                                            </Box>
                                        </Box>
                                    )
                                })
                            }
                            </div>
                            <Typography className={classes.answerDescription} gutterBottom>
                                {data.description} <Link target="_blank" href={data.website} className={classes.website}>Learn More</Link>
                            </Typography>
                        </Fragment>
                    }
                    {
                        !finished &&
                        <Fragment>
                            <div className={classes.answers}>
                                {
                                    data.options.map(item => {
                                        return (
                                            <Button
                                                key={item.quizanswerid}
                                                variant="outlined"
                                                className={classes.answerButton}
                                                color={item.quizanswerid === this.state.selectedItem ? 'primary' : 'default'}
                                                onClick={() => this.onAnswerChanged(item.quizanswerid)}>
                                                {item.answer}
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
                                text={ data.itemsequence === 10 ? 'Finish' : 'Next' }>
                            </NemButton>
                        </Fragment>
                    }
                    <Typography variant="caption" gutterBottom align="center">
                        Question {data.itemsequence} of 10
                    </Typography>
                </form>
            </Box>
        );
    }
}

export default withStyles(styles)(NemQuizItem);
