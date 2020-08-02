import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { ResidentCreater } from "@/app/resident/residentCreater";

// @ts-ignore
import mainVisual from "@/image/tatenaga.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
    },
    image: {
      width: "100%",
    },
    icon: {
      position: "absolute",
    },
  })
);

const data = [
  {
    iconProps: {
      image: "image/loading/star.gif",
      positionX: 10,
      positionY: 10,
    },
    b: 1,
  },
  {
    iconProps: {
      image: "image/loading/star.gif",
      positionX: 10,
      positionY: 10,
    },
    b: 2,
  },
];

const residentCreater = new ResidentCreater();
const residents: JSX.Element[] = data.map((data, index) => {
  return residentCreater.create(data.iconProps).element(index);
});

interface IVirtualSpaceProps {}
const VirtualSpace: React.FC<IVirtualSpaceProps> = (props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <img src={mainVisual} className={classes.image} />
      <Typography className={classes.icon}>メインビジュアル</Typography>
      {residents}
    </Grid>
  );
};
export default VirtualSpace;
