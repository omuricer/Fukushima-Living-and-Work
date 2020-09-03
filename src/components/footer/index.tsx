import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Image from "@/components/form/image";
import bn1 from "@/image/footer/footer_bn_01.jpg";
import bn2 from "@/image/footer/footer_bn_02.jpg";
import bn3 from "@/image/footer/footer_bn_03.jpg";
import bn4 from "@/image/footer/footer_bn_04.jpg";
import bn5 from "@/image/footer/footer_bn_05.jpg";

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
      margin: "1px",
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
  })
);

interface IFooterProps {}
const Footer: React.FC<IFooterProps> = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item xs={12} className={classes.bnGrid}>
        <Image src={bn1} className={classes.bn} />
        <Image src={bn2} className={classes.bn} />
        <Image src={bn3} className={classes.bn} />
        <Image src={bn4} className={classes.bn} />
        <Image src={bn5} className={classes.bn} />
      </Grid>
      <Grid item xs={12} className={classes.contactGrid}>
        <hr className={classes.hr} />
        <Typography variant="body2">
          （お問い合わせ）福島県地域振興課
        </Typography>
        <Typography variant="body2">tel:024-521-8023</Typography>
        <Typography variant="body2">
          mail:ut-turn@pref.fukushima.lg.jp
        </Typography>
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
