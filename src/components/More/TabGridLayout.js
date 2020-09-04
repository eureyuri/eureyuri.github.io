import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
}));

export default function TabGridLayout({ logo, title, subtitle, description, period }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={3}>
                    {logo}
                </Grid>
                <Grid item sm={7}>
                    <h4 style={{marginBottom: "0.5rem"}}>{title}</h4>
                    <h5 style={{marginBottom: "0.5rem"}}>{subtitle}</h5>
                    <div style={{opacity: "0.7"}}>{description}</div>
                </Grid>
                <Grid item sm={2}>
                    {period}
                </Grid>
            </Grid>
        </div>
    )
}
