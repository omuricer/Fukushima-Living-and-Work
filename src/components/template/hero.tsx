import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// @ts-ignore
import Div100vh from "react-div-100vh";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      display: "flex",
      flexDirection: "column",
    },
  })
);

interface IHeroProps {}
const Hero: React.FC<IHeroProps> = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container>
        <Div100vh className={classes.content}>{props.children}</Div100vh>
      </Grid>
    </React.Fragment>
  );
};
export default Hero;
