import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hero from "@/components/template/hero";
import Loading from "@/components/loading";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { position: "relative" },
    outer: { position: "absolute", height: "100vh", width: "100%" },
    center: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translateY(-50%) translateX(-50%)",
      WebkitTransform: "translateY(-50%) translateX(-50%)",

      width: "100%",
      textAlign: "center",
    },
    bottom: {
      position: "absolute",
      top: "100%",
      left: "50%",
      transform: "translateY(-100%) translateX(-50%)",
      WebkitTransform: "translateY(-100%) translateX(-50%)",

      width: "100%",
      textAlign: "center",
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
      <Hero>
        <div className={classes.outer}>
          <div className={classes.center}>
            <Typography>2020</Typography>
            <Typography>福島くらし＆しごとフェア</Typography>
          </div>
          <div className={classes.bottom}>
            <Typography>scroll</Typography>
            <Typography>∨</Typography>
          </div>
        </div>
      </Hero>
      <Hero>
        <Typography>メインビジュアル</Typography>
      </Hero>
    </div>
  );
};
export default App;
