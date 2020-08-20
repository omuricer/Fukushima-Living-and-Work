import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { ResidentCreater } from "@/app/resident/residentCreater";
import RegidentsDefinitions from "./resident/data";

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

interface IVirtualSpaceProps {}
const VirtualSpace: React.FC<IVirtualSpaceProps> = (props) => {
  const [openedResident, setOpenedResident] = useState<string | null>(null);
  const classes = useStyles();

  const handleAnothers = {
    openModal: (residentKey: string) => {
      setOpenedResident(residentKey);
    },
  };
  const residentCreater = new ResidentCreater(handleAnothers);
  const residents: JSX.Element[] = RegidentsDefinitions.map(
    (d, index: number) => {
      return residentCreater.create(d.icon, d.modal).element(
        d.key,
        openedResident == d.key,
        () => setOpenedResident(d.key),
        () => setOpenedResident(null)
      );
    }
  );

  return (
    <Grid container className={classes.root}>
      <img src={mainVisual} className={classes.image} />
      <Typography className={classes.icon}>メインビジュアル</Typography>
      {residents}
    </Grid>
  );
};
export default VirtualSpace;
