import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { NemNavBar, Box, } from "../components";

import { NemQuizItem } from '../components';

const quizItem = {
    question: 'Which NEM Ecosystem member is this?',
    logo: 'quiz-1-1.png',
    items: [
        { id: 1, title: 'Location Core' },
        { id: 2, title: 'Loyal Coin' },
        { id: 3, title: 'Mycoinvest' },
        { id: 4, title: 'Pantos' },
    ]
};

const styles = theme => ({
    root: {
        height: '100vh'
    },
    container: {
        overflow: 'auto'
    }
});

class Quiz extends Component {
    state = {}

    render() {
        const { classes } = this.props;
        return (
            <Box className={classes.root}
                display="flex" flexDirection="column">
                <NemNavBar noShadow></NemNavBar>
                <Box className={classes.container}>
                    <NemQuizItem data={quizItem}></NemQuizItem>
                </Box>
            </Box>
        );
    }
}

export default withStyles(styles)(Quiz);
