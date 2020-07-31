import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    },
  })
);

interface ITemplateHeroProps {}
const TemplateHero: React.FC<ITemplateHeroProps> = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container className={classes.content}>
        {props.children}
      </Grid>
    </React.Fragment>
  );
};
export default TemplateHero;
