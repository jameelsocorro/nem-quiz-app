import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getQuizSummaries } from "../actions/quiz";

import { NemNavBar, Box, NemLoader } from "../components";
import { Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';


const styles = theme => ({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.background.default
    },
    tableContainer: {
        maxWidth: theme.maxWidth,
        margin: '0 auto',
        width: '100%',
        paddingTop: 0,
        boxSizing: 'border-box'
    }
});

class Leaderboard extends Component {

    state = { loading: false }

    componentDidMount() {
        this.setState({ loading: true });
        this.props.getQuizSummaries().then(() => {
            this.setState({ loading: false });
        });
    }

    render() {
        const { quizSummaries } = this.props;
        return (
            <Box className={this.props.classes.root}
                display="flex" flexDirection="column">
                <NemNavBar></NemNavBar>
                <Box mt={2}>
                    <Typography gutterBottom align="center" variant="h5" component="h2">
                        Top 10 Leaders
                    </Typography>
                </Box>
                {
                    this.state.loading ?
                        <NemLoader title='Getting Scores'></NemLoader>
                        :
                        <Box className={this.props.classes.tableContainer} p={2}>
                            <Paper>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell align="right">Score</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {quizSummaries.map(row => (
                                            <TableRow key={row.quizsummaryid}>
                                                <TableCell component="th" scope="row">
                                                    {row.firstname} {row.lastname}
                                                </TableCell>
                                                <TableCell align="right">{row.score}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Paper>
                        </Box>
                }

            </Box>
        );
    }
}

function mapStateToProps(state) {
    const { quizSummaries } = state.quiz;

    let error = null;

    if (state.quiz.error) {
        error = state.quiz.error;
    }

    return {
        quizSummaries,
        error
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { getQuizSummaries },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Leaderboard));

