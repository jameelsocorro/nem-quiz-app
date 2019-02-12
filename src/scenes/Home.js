import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { ButtonNavBar } from "../components";
import { QuizCard } from "../components";
import ImgSrc from '../assets/images/logo.jpg';

const styles = theme => ({
    root: {
        width: '50%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
        margin: '0 auto'
    },
    table: {
        minWidth: 700,
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
function createData(title) {
    id += 1;
    return { id, title};
}

const rows = [
    createData('NEM Quiz 1'),
    createData('NEM Quiz 2'),
    createData('NEM Quiz 3'),
];

function Home(props) {
    const { classes } = props;

    return (
        <div className={classes.bg}>
            <ButtonNavBar location="home"></ButtonNavBar>
            {
                rows.map(function (row, index) {
                    return <QuizCard image={ImgSrc} title={row.title}></QuizCard>
                })
            }
        </div>

    );
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);