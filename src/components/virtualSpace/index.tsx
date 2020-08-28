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
import SideButtonArea from "@/components/sideButton";
import SideButton from "@/components/sideButton/button";
import SideButtonImage from "@/image/sideButtons/sidebutton.png"; // [TODO:
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

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
  const [isVisibleSideButtons, setIsVisibleSideButtons] = useState<boolean>(
    false
  );
  const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false);
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

  const openMenu = () => {
    setIsVisibleMenu(true);
  };
  const closeMenu = () => {
    setIsVisibleMenu(false);
  };

  return (
    <Grid container className={classes.root}>
      <SideButtonArea
        onVisible={() => setIsVisibleSideButtons(true)}
        onHide={() => setIsVisibleSideButtons(false)}
      >
        <SideButton
          isVisible={isVisibleSideButtons}
          visibleDelay={100}
          onClick={openMenu}
          image={SideButtonImage}
        >
          Floor Guide
        </SideButton>
        <SideButton
          isVisible={isVisibleSideButtons}
          visibleDelay={200}
          onClick={() => {}}
          image={SideButtonImage}
        >
          個別相談予約
        </SideButton>
        <SideButton
          isVisible={isVisibleSideButtons}
          visibleDelay={300}
          onClick={() => {}}
          image={SideButtonImage}
        >
          <ChatBubbleIcon style={{ fontSize: "1.5rem" }} />
          チャット相談
        </SideButton>
      </SideButtonArea>
      <Menu
        isVisible={isVisibleMenu}
        closeMenu={closeMenu}
        sclollToFloors={sclollToFloors}
      />
      {floors}
    </Grid>
  );
};
export default VirtualSpace;
