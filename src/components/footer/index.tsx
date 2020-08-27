import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
    },
  })
);

interface IFooterProps {}
const Footer: React.FC<IFooterProps> = (props) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.root}>
      Footer
    </Grid>
  );
};
export default Footer;
