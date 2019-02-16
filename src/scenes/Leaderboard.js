import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { NemNavBar, Box } from "../components";
import { Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

const items = [
    {
        id: 1,
        firstName: 'Jameel',
        lastName: 'Socorro',
        score: 9
    },
    {
        id: 2,
        firstName: 'Jamie',
        lastName: 'Socorro',
        score: 9
    },
    {
        id: 3,
        firstName: 'Paula',
        lastName: 'Lara',
        score: 9
    },
];

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
    render() {
        return (
            <Box className={this.props.classes.root}
                    display="flex" flexDirection="column">
                <NemNavBar></NemNavBar>
                <Box mt={2}>
                    <Typography gutterBottom align="center" variant="h5" component="h2">
                        Top 10 Leaders
                    </Typography>
                </Box>
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
                                {items.map(row => (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.firstName} {row.lastName}
                                        </TableCell>
                                        <TableCell align="right">{row.score}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Box>
            </Box>
        );
    }
}

export default withStyles(styles)(Leaderboard);
