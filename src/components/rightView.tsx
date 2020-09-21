import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Image from "@/components/form/image";
import Banner1 from "@/image/1stv_bn1.png";
import Banner2 from "@/image/1stv_bn2.png";
import Logo from "@/image/logo.png";
import Swiper from "react-id-swiper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
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
      marginTop: "3vh",
    },
    eventSwiper: {
      width: "80%",
      maxWidth: "350px",
      margin: "auto",
    },
    eventBoard: {
      width: "80%",
      maxWidth: "350px",
    },
    scroll: {
      textAlign: "center",
      marginTop: "2vh",
    },
  })
);

interface IRightViewProps {
  openModal: (modalKey: string) => void;
}
const RightView: React.FC<IRightViewProps> = (props) => {
  const classes = useStyles();

  const swiperParams = {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };

  return (
    <React.Fragment>
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
        <div className={classes.eventSwiper}>
          <Swiper {...swiperParams}>
            <Image
              src={Banner1}
              className={classes.eventBoard}
              onClick={() => props.openModal("projection")}
            />
            <Image
              src={Banner2}
              className={classes.eventBoard}
            />
          </Swiper>
        </div>
      </Grid>
    </React.Fragment>
  );
};
export default RightView;
