import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hero from "@/components/template/hero";
import backgroundImage from "@/image/rooftop.png";
import Image from "@/components/form/image";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "contain",
      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat",
      // TODO: Heroコンポーネントと重複。マージするようにしたい
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },
    center: {
      textAlign: "center",
    },
    bottom: {
      textAlign: "center",
      marginTop: "auto",
    },
    logo: {
      width: "90vw",
    },
  })
);

interface IFirstViewProps {}
const FirstView: React.FC<IFirstViewProps> = (props) => {
  const classes = useStyles();

  return (
    <Hero className={classes.root}>
      <Grid className={classes.center}>
        <Image src={"logo"} className={classes.logo} />
      </Grid>
      <Grid className={classes.center}>
        <Typography>
          今年も開催,”ふくしまの本気”移住イベント！
          <br />
          移住相談員、移住コーディネーターの他
          <br />
          ●●の出店団体が大集結！
          <br />
          あなたに合ったふくしまぐらし
          <br />
          見つけてみませんか？
        </Typography>
      </Grid>
      <Grid className={classes.center}>
        <Typography>トークライブ</Typography>
        <Typography>リアルミニイベント告知</Typography>
      </Grid>
      <div className={classes.bottom}>
        <Typography>scroll</Typography>
        <Typography>∨</Typography>
      </div>
    </Hero>
  );
};
export default FirstView;
