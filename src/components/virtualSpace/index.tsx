import React, { useState, useContext } from "react";
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
import { IsMobileContext } from "@/context/isMobile";

import Image from "@/components/form/image";
import HotelRooftop from "@/image/virtualSpace/hotel_00_pc.png";
import HotelSignBoard from "@/image/virtualSpace/hotel_01.png";

const floorNumber = 7;
const floorData = [
  {
    image1: FloorImage1,
    image2: FloorImage1_2,
    tooltipTitle: '総合案内',
    tooltipText: '何から相談するか悩んだらこちら！',
  },
  {
    image1: FloorImage2,
    image2: null,
    tooltipTitle: 'しごと相談室',
    tooltipText: '仕事の相談をしたい方',
  },
  {
    image1: FloorImage3,
    image2: null,
    tooltipTitle: '水辺のあるくらし',
    tooltipText: '海や湖の近くで暮らしたい方',
  },
  {
    image1: FloorImage4,
    image2: null,
    tooltipTitle: '自然豊かな山あいのくらし',
    tooltipText: '大自然の中で暮らしたい方',
  },
  {
    image1: FloorImage5,
    image2: null,
    tooltipTitle: '便利な街でのくらし',
    tooltipText: '利便性を重視する方',
  },
  {
    image1: FloorImage6,
    image2: null,
    tooltipTitle: '市町村相談',
    tooltipText: '相談したい市町村がある方',
  },
  {
    image1: FloorImage7,
    image2: null,
    tooltipTitle: '動画シアター',
    tooltipText: 'トークライブや移住関連動画をチェック！',
  },

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
  const isMobileContext = useContext(IsMobileContext);

  const floors = [...Array(floorNumber)].map((_, i) => (
    <Floor
      key={i}
      number={i}
      visual={floorData[i].image1}
      visual2={floorData[i].image2}
      openedModal={props.openedModal}
      openModal={props.openModal}
      closeModal={props.closeModal}
      toolTipTitle={floorData[i].tooltipTitle}
      toolTipText={floorData[i].tooltipText}
    />
  ));
  floors.reverse();

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
        openModal={props.openModal}
      />
      {
        isMobileContext ? (
          <React.Fragment />
        ) : (
            <React.Fragment>
              <Grid>
                <Image src={HotelRooftop} style={{ width: "100%" }} />
              </Grid>
              <Grid>
                <Image src={HotelSignBoard} style={{ width: "100%" }} />
              </Grid>
            </React.Fragment>
          )}
      {floors}
    </Grid>
  );
});
export default VirtualSpace;
