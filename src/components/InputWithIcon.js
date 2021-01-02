import makeStyles from "@material-ui/core/styles/makeStyles"
import Grid from "@material-ui/core/Grid"
import SearchIcon from "@material-ui/icons/Search"
import TextField from "@material-ui/core/TextField"
import React from "react"

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function InputWithIcon({ onChange }) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item>
            <TextField label="Search for post" onChange={onChange}/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}