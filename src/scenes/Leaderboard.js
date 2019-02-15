import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { NemNavBar } from "../components";

const styles = theme => ({
  root: {
    width: '50%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    margin: '0 auto'
  },
  header: {
      textAlign: 'center'
  },
  bg: {
      backgroundColor: '#EEEEEE',
      height: '100vh'
  }
});

let id = 0;
function createData(name, score, time) {
  id += 1;
  return { id, name, score, time };
}

const rows = [
    createData('Jamie', 80, 80.9),
    createData('Jameel', 90, 70.8),
    createData('Sharie', 100, 60.5),
];

function Leaderboard(props) {
  const { classes } = props;

  return (
      <div className={classes.bg}>
       <NemNavBar location="leaderboard"></NemNavBar>
          <h2 className={classes.header}>Top 10 Leaderboard</h2>
          <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Score</TableCell>
                            <TableCell>Time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.score}</TableCell>
                                <TableCell>{row.time}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
      </div>

  );
}

Leaderboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Leaderboard);
