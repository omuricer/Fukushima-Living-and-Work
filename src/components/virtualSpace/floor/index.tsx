import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid, { GridProps } from "@material-ui/core/Grid";

import { ResidentCreater } from "@/app/resident/residentCreater";
import RegidentsDefinitions from "../resident/data";

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
const Floor = React.memo(
  React.forwardRef((props: IFloorProps, ref: React.Ref<HTMLDivElement>) => {
    const classes = useStyles();

    const residentCreater = new ResidentCreater(props.handleAnothers);
    const residents: JSX.Element[] = RegidentsDefinitions.filter(
      (d) => d.floor === props.number + 1
    ).map((d, index: number) => {
      return residentCreater
        .create(index.toString(), d.key, d.icon ?? null, d.modal)
        .element(
          props.openedResident == d.key,
          () => props.setOpenedResident(d.key),
          () => props.setOpenedResident(null)
        );
    });

    return (
      <Grid container className={classes.root} ref={ref}>
        <img src={props.visual} className={classes.image} />
        {residents}
      </Grid>
    );
  })
);
export default Floor;
