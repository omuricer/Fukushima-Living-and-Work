import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Loading from "@/components/loading";

import VirtualSpace from "@/components/virtualSpace";
import FirstView from "@/components/firstView";
import Footer from "@/components/footer";

import backgroundImage from "@/image/background.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      backgroundSize: "contain",
      background: `linear-gradient(to bottom, rgba(68, 186, 255, 0.2), rgba(0, 255, 31, 0.2)), url(${backgroundImage})`,
    },
  })
);

interface IAppProps {}
const App: React.FC<IAppProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const classes = useStyles();

  setTimeout(() => {
    setLoading(false);
  }, 2500);

  return (
    <div className={classes.root}>
      <Loading display={loading} />
      {!loading && (
        <React.Fragment>
          <FirstView />
          <VirtualSpace />
          <Footer />
        </React.Fragment>
      )}
    </div>
  );
};
export default App;
