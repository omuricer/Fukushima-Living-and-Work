import React, { useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Image from "@/components/form/image";
import bn1 from "@/image/footer/footer_bn_01.jpg";
import bn2 from "@/image/footer/footer_bn_02.jpg";
import bn3 from "@/image/footer/footer_bn_03.jpg";
import bn4 from "@/image/footer/footer_bn_04.jpg";
import bn5 from "@/image/footer/footer_bn_05.jpg";
import { IsMobileContext } from "@/context/isMobile";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    },
    contactGrid: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexFlow: "column",
    },
    hr: {
      width: "20vw",
      marginBottom: "30px",
      borderWidth: "2px",
    },
    copyrightGrid: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexFlow: "column",
      paddingTop: "40px",
      paddingBottom: "20px",
    },
    contact: {
      display: (isMobileContext: boolean) => isMobileContext ? 'block' : 'inline-block',
      margin: (isMobileContext: boolean) => isMobileContext ? 'auto' : '7px',
    }
  })
);

interface IFooterProps { }
const Footer: React.FC<IFooterProps> = (props) => {
  const isMobileContext = useContext(IsMobileContext);
  const classes = useStyles(isMobileContext);

  return (
    <React.Fragment>
      {isMobileContext ? (<Grid item xs={12} className={classes.bnGrid}>
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
      </Grid>) : (<React.Fragment />)}
      <Grid item xs={12} className={classes.contactGrid}>
        <hr className={classes.hr} />
        <Typography variant="body2">
          （お問い合わせ）福島県地域振興課
        </Typography>
        <div>
          <Typography variant="body2" className={classes.contact}>tel:024-521-8023</Typography>
          <Typography variant="body2" className={classes.contact}>
            mail:ut-turn@pref.fukushima.lg.jp
        </Typography>
        </div>
      </Grid>
      <Grid item xs={12} className={classes.copyrightGrid}>
        <Typography variant="body2">
          ©2020 Fukushima Prefecture. All Rights Reserved.
        </Typography>
      </Grid>
    </React.Fragment>
  );
};
export default Footer;
