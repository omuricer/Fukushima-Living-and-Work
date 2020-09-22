import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Image from "@/components/form/image";
import Banner1 from "@/image/1stv_bn1.png";
import Banner2 from "@/image/1stv_bn2.png";
import Logo from "@/image/logo.png";
import Swiper from "react-id-swiper";
import bn1 from "@/image/footer/footer_bn_01.jpg";
import bn2 from "@/image/footer/footer_bn_02.jpg";
import bn3 from "@/image/footer/footer_bn_03.jpg";
import bn4 from "@/image/footer/footer_bn_04.jpg";
import bn5 from "@/image/footer/footer_bn_05.jpg";
import UsagiImage from "@/image/virtualSpace/modalTitleIcon/m_top_1.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fixed: {
      position: "fixed",
      left: 'auto',
      marginLeft: '5vw',
      width: '40vw',
    },
    absolute: {
      position: "absolute",
      bottom: '20px',
      left: '5vw',
      width: '40vw',
    },
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
      height: "230px",
      backgroundPositionX: "center",
      backgroundPositionY: "bottom",
      backgroundRepeat: "no-repeat",
      marginBottom: '20px',
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
    bnGrid: {
      position: "relative",
      display: "flex",
      flexFlow: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "30px",
    },
    bn: {
      margin: "5px",
      width: "280px",
    },
  })
);

interface IRightViewProps {
  openModal: (modalKey: string) => void;
}
const RightView: React.FC<IRightViewProps> = (props) => {
  const [isFixed, setIsFixed] = useState<boolean>(true);
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

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsFixed(getIsFixed());
    });
    window.addEventListener('resize', () => {
      setIsFixed(getIsFixed());
    });
  }, []);


  return (
    <React.Fragment>
      <Grid className={isFixed ? classes.fixed : classes.absolute}>
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
        <Usagi />
        <Grid className={classes.bnGrid}>
          <a
            href="https://www.pref.fukushima.lg.jp/site/fui/#wide/0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={bn1} className={classes.bn} />
          </a>
          <a
            href="https://www.f-turn.jp/ "
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={bn2} className={classes.bn} />
          </a>
          <a
            href="https://www.pref.fukushima.lg.jp/sec/11025b/10000.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={bn3} className={classes.bn} />
          </a>
          <a
            href="https://www.pref.fukushima.lg.jp/sec/11025b/iju.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={bn4} className={classes.bn} />
          </a>
          <a
            href="https://www.pref.fukushima.lg.jp/sec/11025b/teleworkijuhojo.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={bn5} className={classes.bn} />
          </a>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default RightView;


// scroll位置取得
const scrollTop = (): number => {
  return Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop);
};

const getIsFixed = () => {
  const pageHeight = document.body.clientHeight;
  const scroll = scrollTop();
  const footerHeight = 150;
  const rightViewHeight = 1134;
  return pageHeight - scroll - window.innerHeight + (window.innerHeight - rightViewHeight) - 20 > footerHeight;
}

const useStylesUsagi = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '30px',
      position: 'relative',
    },
    image: {
      zIndex: 10,
      width: '200px',
    },
    text: {
      backgroundColor: '#ffffff',
      opacity: '0.5',
      display: 'inline-block',
      padding: '40px',
      borderRadius: '120px 120px 120px 120px / 70px 70px 70px 70px',
      margin: 'auto',
      position: 'relative',
      top: '-20px',
      textAlign: "center",
    },
  })
);

interface IUsagiProps {
}
const Usagi: React.FC<IUsagiProps> = (props) => {
  const classes = useStylesUsagi();

  return (
    <Grid className={classes.root}>
      <Image src={UsagiImage} className={classes.image} />
      <Typography className={classes.text}>
        ホテルの各フロアのアイコンを
          <br />
          クリックしてみてください。
          <br />
          迷ったときは総合案内へどうぞ。
        </Typography>
    </Grid>
  );
};
