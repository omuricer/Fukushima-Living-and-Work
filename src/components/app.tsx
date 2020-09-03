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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      backgroundSize: "contain",
      background: `linear-gradient(to bottom, rgba(64, 183, 243, 0.2), rgba(79, 152, 51, 0.2)), url(${backgroundImage})`,
    },
  })
);

interface IAppProps {}
const App: React.FC<IAppProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [backHistory, setBackHistory] = useState<BackHistory>(_backHistory);
  const classes = useStyles();

  setTimeout(() => {
    setLoading(false);
  }, 2500);

  return (
    <div className={classes.root}>
      <BackHistoryContext.Provider value={backHistory}>
        <GlobalStyle />
        <Loading display={loading} />
        <FirstView />
        <VirtualSpace />
        <Footer />
      </BackHistoryContext.Provider>
    </div>
  );
};
export default App;
