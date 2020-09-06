import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import GlobalStyle from "@/components/globalStyles";
import Loading from "@/components/loading";

import VirtualSpace from "@/components/virtualSpace";
import FirstView from "@/components/firstView";
import Footer from "@/components/footer";

import { BackHistoryContext } from "@/context/backHistory";
import _backHistory, { BackHistory } from "@/app/libs/backHistory";

import backgroundImage from "@/image/background.jpg";
import backgroundImage2 from "@/image/cloud_mb_2.png";
import Ogp from "@/image/ogp.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      background: `url(${backgroundImage2}), linear-gradient(to bottom, rgba(64, 183, 243, 0.2), rgba(79, 152, 51, 0.2)), url(${backgroundImage})`,
      backgroundRepeat: "no-repeat, repeat, repeat",
      backgroundSize: "auto, contain, contain",
      backgroundPositionX: "center",
    },
  })
);

interface IAppProps {}
const App: React.FC<IAppProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [backHistory, setBackHistory] = useState<BackHistory>(_backHistory);
  const [openedModal, setOpenedModal] = useState<string | null>(null);
  const classes = useStyles();

  setTimeout(() => {
    setLoading(false);
  }, 2500);

  const openModal = (modalKey: string) => {
    setOpenedModal(modalKey);
  };
  const closeModal = () => {
    setOpenedModal(null);
  };

  return (
    <div className={classes.root}>
      <BackHistoryContext.Provider value={backHistory}>
        <GlobalStyle />
        <Loading display={loading} />
        <FirstView openModal={openModal} />
        <VirtualSpace
          openedModal={openedModal}
          openModal={openModal}
          closeModal={closeModal}
        />
        <Footer />
      </BackHistoryContext.Provider>
    </div>
  );
};
export default App;
