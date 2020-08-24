import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { ResidentCreater } from "@/app/resident/residentCreater";
import RegidentsDefinitions from "./resident/data";
import Floor from "./floor";

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
  const floorProps = {
    openedResident: openedResident,
    setOpenedResident: setOpenedResident,
    handleAnothers: handleAnothers,
  };

  return (
    <Grid container className={classes.root}>
      <Floor number={7} visual={"thater"} {...floorProps} />
      <Floor number={6} visual={"calture"} {...floorProps} />
      <Floor number={5} visual={"mountain"} {...floorProps} />
      <Floor number={4} visual={"sea"} {...floorProps} />
      <Floor number={3} visual={"city"} {...floorProps} />
      <Floor number={2} visual={"school"} {...floorProps} />
      <Floor number={1} visual={"concierge"} {...floorProps} />
    </Grid>
  );
};
export default VirtualSpace;
