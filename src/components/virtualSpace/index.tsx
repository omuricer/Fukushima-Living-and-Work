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
import Menu from "@/components/menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
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

  const floorNumber = 7;
  const floorRefs = [...Array(floorNumber)].map(() =>
    React.createRef<HTMLDivElement>()
  );
  const floorImages = [
    FloorImage1,
    FloorImage2,
    FloorImage3,
    FloorImage4,
    FloorImage5,
    FloorImage6,
    FloorImage7,
  ];
  const floors = [...Array(floorNumber)].map((_, i) => (
    <Floor
      key={i}
      number={i}
      visual={floorImages[i]}
      openedResident={openedResident}
      setOpenedResident={setOpenedResident}
      handleAnothers={handleAnothers}
      ref={floorRefs[i]}
    />
  ));
  floors.reverse();

  const sclollToFloors = [...Array(floorNumber)].map((_, i) =>
    React.useCallback(() => {
      floorRefs[i]!.current!.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, [floorRefs[i]])
  );

  return (
    <Grid container className={classes.root}>
      <Menu sclollToFloors={sclollToFloors} />
      {floors}
    </Grid>
  );
};
export default VirtualSpace;
