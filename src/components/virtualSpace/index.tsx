import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Floor from "./floor";
import FloorImage1 from "@/image/virtualSpace/1F.png";
import FloorImage2 from "@/image/virtualSpace/2F.png";
import FloorImage3 from "@/image/virtualSpace/3F.png";
import FloorImage4 from "@/image/virtualSpace/4F.png";
import FloorImage5 from "@/image/virtualSpace/5F.png";
import FloorImage6 from "@/image/virtualSpace/6F.png";
import FloorImage7 from "@/image/virtualSpace/7F.png";

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
      <Floor number={7} visual={FloorImage7} {...floorProps} />
      <Floor number={6} visual={FloorImage6} {...floorProps} />
      <Floor number={5} visual={FloorImage5} {...floorProps} />
      <Floor number={4} visual={FloorImage4} {...floorProps} />
      <Floor number={3} visual={FloorImage3} {...floorProps} />
      <Floor number={2} visual={FloorImage2} {...floorProps} />
      <Floor number={1} visual={FloorImage1} {...floorProps} />
    </Grid>
  );
};
export default VirtualSpace;
