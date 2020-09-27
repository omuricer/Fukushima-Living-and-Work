import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import GlobalStyle from "@/components/globalStyles";
import Loading from "@/components/loading";
import Grid from "@material-ui/core/Grid";

import VirtualSpace from "@/components/virtualSpace";
import FirstView from "@/components/firstView";
import Footer from "@/components/footer";

import { IsMobileContext } from "@/context/isMobile";
import { BackHistoryContext } from "@/context/backHistory";
import _backHistory, { BackHistory } from "@/app/libs/backHistory";

import Image from "@/components/form/image";
import Hotel from "@/image/virtualSpace/hotel_01.png";
import backgroundImage from "@/image/background.jpg";
import backgroundImage2 from "@/image/cloud_mb_2.png";
import Ogp from "@/image/ogp.png";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

// for PC
import RightView from "@/components/rightView";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      background: `url(${backgroundImage2}), linear-gradient(to bottom, rgba(64, 183, 243, 0.2), rgba(79, 152, 51, 0.2)), url(${backgroundImage})`,
      backgroundRepeat: (isMobile: boolean) => isMobile ? "no-repeat, repeat, repeat" : "repeat, repeat, repeat",
      backgroundSize: (isMobile: boolean) => isMobile ? "auto, contain, contain" : "auto, contain, auto",
      backgroundPositionX: "center",
    },
  })
);
interface IAppProps { }
const App: React.FC<IAppProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [backHistory, setBackHistory] = useState<BackHistory>(_backHistory);
  const [openedModal, setOpenedModal] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const classes = useStyles(isMobile);
  const theme = useTheme();

  setTimeout(() => {
    setLoading(false);
  }, 2500);

  const openModal = (modalKey: string) => {
    setOpenedModal(modalKey);
  };
  const closeModal = () => {
    setOpenedModal(null);
  };

  // detectedBreakPoint
  type breakPoint = "xs" | "sm" | "md" | "lg";
  const breakPoints: breakPoint[] = ["xs", "sm", "md", "lg"];
  let detectedBreakPoint: null | breakPoint = null;
  breakPoints.forEach((breakPoint: breakPoint) => {
    if (useMediaQuery(theme.breakpoints.up(breakPoint))) {
      detectedBreakPoint = breakPoint;
    }
  });
  if (isMobile != (detectedBreakPoint == "xs")) setIsMobile(detectedBreakPoint == "xs");

  return (
    <div className={classes.root}>
      <IsMobileContext.Provider value={isMobile}>
        <BackHistoryContext.Provider value={backHistory}>
          <GlobalStyle />
          <Loading display={loading} />
          {!loading ?
            isMobile ? (
              <React.Fragment>
                <FirstView openModal={openModal} />
                <Grid>
                  <Image src={Hotel} style={{ width: "100%" }} />
                </Grid>
                <VirtualSpace
                  openedModal={openedModal}
                  openModal={openModal}
                  closeModal={closeModal}
                />
                <Footer />
              </React.Fragment>
            ) : (
                <Grid container>
                  <Grid item sm={6}>
                    <VirtualSpace
                      openedModal={openedModal}
                      openModal={openModal}
                      closeModal={closeModal}
                    />
                  </Grid>
                  <Grid item sm={6} style={{ margin: '0 auto', width: '100%', position: "relative" }}>
                    <RightView openModal={openModal} />
                  </Grid>
                  <Grid item sm={12}>
                    <Footer />
                  </Grid>
                </Grid>
              ) : (
              <React.Fragment></React.Fragment>
            )}
        </BackHistoryContext.Provider>
      </IsMobileContext.Provider>
    </div>
  );
};
export default App;


