import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hero from "@/components/template/hero";
import backgroundImage from "@/image/virtualSpace/hotel_01.png";
import Image from "@/components/form/image";
import Bn from "@/image/1stv_bn.png";
import Logo from "@/image/logo.png";
import ScrollMe from "@/components/scrollMe";

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
    bottom: {
      textAlign: "center",
      marginTop: "auto",
    },
    logo: {
      textAlign: "center",
      backgroundImage: `url(${Logo})`,
      backgroundSize: "cover",
      height: "170px",
      backgroundPositionX: "center",
    },
    catch: {
      textAlign: "center",
    },
    catchText: {
      lineHeight: "1.8em",
    },
    event: {
      textAlign: "center",
      marginTop: "3vh",
    },
    eventBoard: {
      margin: "0 auto",
      width: "80vw",
    },
    scroll: {
      textAlign: "center",
      marginTop: "2vh",
    },
  })
);

interface IFirstViewProps {
  openModal: (modalKey: string) => void;
}
const FirstView: React.FC<IFirstViewProps> = (props) => {
  const classes = useStyles();

  return (
    <Hero className={classes.root}>
      <Grid className={classes.logo}>{/* <Image src={Logo} /> */}</Grid>
      <Grid className={classes.catch}>
        <Typography className={classes.catchText}>
          福島県内の市町村や団体が大集合！！
          <br />
          ALLふくしまであなたの移住を応援します
          <br />
          あなたに合ったふくしまぐらしを
          <br />
          一緒に見つけましょう！
        </Typography>
      </Grid>
      <Grid className={classes.event}>
        <Image
          src={Bn}
          className={classes.eventBoard}
          onClick={() => props.openModal("projection")}
        />
      </Grid>
      <Grid className={classes.scroll}>
        <ScrollMe sclolled={false} />
      </Grid>
    </Hero>
  );
};
export default FirstView;
