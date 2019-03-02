import React, { Component } from 'react';

import { withStyles, CircularProgress, Typography } from '@material-ui/core';

const styles = theme => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },
    progressContainer: {
        textAlign: 'center'
    },
    progressTitle: {
        marginTop: theme.spacing.unit
    }
});

class NemLoader extends Component {
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

export default withStyles(styles)(NemLoader);
