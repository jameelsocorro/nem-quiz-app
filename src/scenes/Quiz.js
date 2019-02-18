import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { NemNavBar, Box, NemButton } from "../components";
import { Typography, RadioGroup, FormControlLabel, Radio, Link } from '@material-ui/core';

const quizItem = {
    question: 'Which NEM Ecosystem member is this?',
    logo: 'quiz-1-1.png',
    items: [
        { id: 1, title: 'Location Core' },
        { id: 2, title: 'Loyal Coin' },
        { id: 3, title: 'Mycoinvest' },
        { id: 4, title: 'Pantos' },
    ],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    link: 'Learn More'
};

const styles = theme => ({
    root: {
        height: '100vh'
    },
    quizItemContainer: {
        maxWidth: theme.maxWidth,
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box'
    },
    group: {
        flexWrap: 'noWrap',
        minHeight: '192px'
    },
    logo: {
        width: '150px',
        marginTop: theme.spacing.unit * 1,
        marginBottom: theme.spacing.unit * 3
    },
    answerDescription: {
        maxWidth: '230px',
        marginTop: theme.spacing.unit * 4,
    },
    itemButton: {
        maxWidth: '200px'
    }
});

class Quiz extends Component {
    state = {
        isLoading: false,
        selectedItem: null
    }

    onAnswerChanged = e => {
        this.setState({ selectedItem: e.target.value });
    }

    onSubmitAnswer = e => {
        e.preventDefault();
    }

    render() {
        const { classes } = this.props;
        const isFormValid = this.state.selectedItem !== null;
        return (
            <Box className={classes.root}
                display="flex" flexDirection="column">
                <NemNavBar noShadow></NemNavBar>
                <Box className={classes.quizItemContainer} p={4}>
                    <form className={classes.form} onSubmit={this.onSubmitAnswer}>
                        <Typography gutterBottom align="center" variant="h5" component="h2">
                            {quizItem.question}
                        </Typography>
                        <img className={classes.logo} src={require(`../assets/images/${quizItem.logo}`)} alt="" />
                        <RadioGroup
                            name="quizAnswers"
                            className={classes.group}
                            value={this.state.selectedItem}
                            onChange={this.onAnswerChanged}>
                            {
                                quizItem.items.map((item) => {
                                    return <FormControlLabel
                                            key={item.id}
                                            value={item.id.toString()}
                                            control={<Radio color="primary" />}
                                            label={item.title} />
                                })
                            }
                        </RadioGroup>
                        <Typography className={classes.answerDescription} gutterBottom>
                            {quizItem.description} <Link href={quizItem.link} className={classes.link}>Learn More</Link>
                        </Typography>
                        <NemButton
                            mt={4}
                            mb={1}
                            className={classes.itemButton}
                            disabled={!isFormValid || this.state.isLoading}
                            type="submit"
                            text="Next">
                        </NemButton>
                        <Typography variant="caption" gutterBottom align="center">
                            Question 1 of 10
                        </Typography>
                    </form>
                </Box>
            </Box>
        );
    }
}

export default withStyles(styles)(Quiz);
