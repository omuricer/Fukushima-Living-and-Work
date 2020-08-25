import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { ResidentCreater } from "@/app/resident/residentCreater";
import RegidentsDefinitions from "../resident/data";

// @ts-ignore
import mainVisual from "@/image/virtualSpace.png";

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

interface IFloorProps {
  number: number;
  visual: string;
  openedResident: string | null;
  setOpenedResident: (openedResident: string | null) => void;
  handleAnothers: {
    openModal: (residentKey: string) => void;
  };
}
const Floor: React.FC<IFloorProps> = (props) => {
  const classes = useStyles();

  const residentCreater = new ResidentCreater(props.handleAnothers);
  const residents: JSX.Element[] = RegidentsDefinitions.filter(
    (d) => d.floor === props.number
  ).map((d, index: number) => {
    return residentCreater.create(d.icon ?? null, d.modal).element(
      d.key,
      props.openedResident == d.key,
      () => props.setOpenedResident(d.key),
      () => props.setOpenedResident(null)
    );
  });

  return (
    <Grid container className={classes.root}>
      <img src={props.visual} className={classes.image} />
      {residents}
    </Grid>
  );
};
export default Floor;
