import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hero from "@/components/template/hero";
import backgroundImage from "@/image/virtualSpace/hotel_00.png";
import Image from "@/components/form/image";
import Banner1 from "@/image/1stv_bn1.png";
import Banner2 from "@/image/1stv_bn2.png";
import Logo from "@/image/logo.png";
import ScrollMe from "@/components/scrollMe";
import Swiper from "react-id-swiper";

// import "swiper/components/pagination/pagination.scss";

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
      height: "170px",
      backgroundPositionX: "center",
      backgroundRepeat: "no-repeat",
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
      maxWidth: "450px",
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

  const swiperParams = {
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };

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
        <Swiper {...swiperParams}>
          <Image
            src={Banner1}
            className={classes.eventBoard}
            onClick={() => props.openModal("projection")}
          />
          <Image
            src={Banner2}
            className={classes.eventBoard}
            // onClick={() => props.openModal("projection")}
          />
        </Swiper>
      </Grid>
      <Grid className={classes.scroll}>
        <ScrollMe sclolled={false} />
      </Grid>
    </Hero>
  );
};
export default FirstView;
