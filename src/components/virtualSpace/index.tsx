import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Floor from "./floor";
import FloorImage1 from "@/image/virtualSpace/hotel_08.png";
import FloorImage1_2 from "@/image/virtualSpace/hotel_08_2.png";
import FloorImage2 from "@/image/virtualSpace/hotel_07.png";
import FloorImage3 from "@/image/virtualSpace/hotel_06.png";
import FloorImage4 from "@/image/virtualSpace/hotel_05.png";
import FloorImage5 from "@/image/virtualSpace/hotel_04.png";
import FloorImage6 from "@/image/virtualSpace/hotel_03.png";
import FloorImage7 from "@/image/virtualSpace/hotel_02.png";
import Menu from "@/components/menu";
import SideButtonArea from "@/components/sideButton";
import SideButton from "@/components/sideButton/button";
import tab01Image from "@/image/sideButtons/tab_01.png";
import tab02Image from "@/image/sideButtons/tab_02.png";
import tab03Image from "@/image/sideButtons/tab_03.png";

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
const floorImages2 = [
  FloorImage1_2,
  null,
  null,
  null,
  null,
  null,
  null,
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
    },
  })
);

interface IVirtualSpaceProps {
  openedModal: string | null;
  openModal: (modalKey: string) => void;
  closeModal: () => void;
}
const VirtualSpace: React.FC<IVirtualSpaceProps> = React.memo((props) => {
  const [isVisibleSideButtons, setIsVisibleSideButtons] = useState<boolean>(
    false
  );
  const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false);
  const classes = useStyles();

  const floors = [...Array(floorNumber)].map((_, i) => (
    <Floor
      key={i}
      number={i}
      visual={floorImages[i]}
      visual2={floorImages2[i]}
      openedModal={props.openedModal}
      openModal={props.openModal}
      closeModal={props.closeModal}
      ref={floorRefs[i]}
    />
  ));
  floors.reverse();

  const sclollToFloors = [...Array(floorNumber)].map((_, i) =>
    React.useCallback(
      () =>
        floorRefs[i]!.current!.scrollIntoView({
          behavior: "smooth",
          block: "center",
        }),
      [floorRefs[i]]
    )
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
          image={tab01Image}
        />
        <SideButton
          isVisible={isVisibleSideButtons}
          visibleDelay={200}
          onClick={() => {
            props.openModal("conciergeCounter");
          }}
          image={tab02Image}
        />
        <SideButton
          isVisible={isVisibleSideButtons}
          visibleDelay={300}
          onClick={() => window.open("https://needyou.jp/u/mypage/")}
          image={tab03Image}
        />
      </SideButtonArea>
      <Menu
        isVisible={isVisibleMenu}
        closeMenu={closeMenu}
        sclollToFloors={sclollToFloors}
        openModal={props.openModal}
      />
      {floors}
    </Grid>
  );
});
export default VirtualSpace;
