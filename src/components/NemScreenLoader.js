import React, { Component } from 'react';

import { withStyles, CircularProgress, Typography } from '@material-ui/core';
import { Box } from './Box';

const styles = theme => ({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: theme.palette.background.overlay,
        zIndex: '1101',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    progressContainer: {
        textAlign: 'center'
    },
    progressTitle: {
        color: '#FFF',
        marginTop: theme.spacing.unit
    }
});

class NemScreenLoader extends Component {
    render() {
        const { classes, title } = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.progressContainer}>
                    <CircularProgress size={60} />
                    <Typography className={classes.progressTitle} variant="subheading">
                        {title}
                    </Typography>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(NemScreenLoader);
