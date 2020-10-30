import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import SquareButton from "@/components/form/squareButton";
import Image from "@/components/form/image";
import Typography from "@material-ui/core/Typography";
import { IConciergeModalProps } from "./index";
import BackButton from "@/components/form/backButton";
import birdVisual from "@/image/virtualSpace/living/life1_sea.jpg";
import bearVisual from "@/image/virtualSpace/living/life1_moutain.jpg";
import peachVisual from "@/image/virtualSpace/living/life1_town.jpg";
import Sleep from "@/app/libs/sleep";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      margin: "15px",
    },
    lifeStyles: {
      display: "flex",
      flexFlow: "column",
      justifyContent: "center",
      marginTop: "15px",
      marginBottom: "25px",
    },
    answerButton: {
      width: "100%",
      height: "50px",
      margin: "5px",
    },
    registerUser: {
      width: "70%",
      height: "60px",
      marginTop: "15px",
      marginBottom: "auto",
      marginLeft: "auto",
      marginRight: "auto",
    },
    wrap: {
      width: "100%",
      height: "75px",
      position: "relative",
    },
  })
);

/**
 * くらしのスタイルを選ぶ
 * @param props
 */
const SelectLifeStyle: React.FC<IConciergeModalProps> = (props) => {
  const classes = useStyles();

  const changeModal = (key: string) => {
    props.closeModal();
    props.handleAnothers.openModal(key);
  };

  return (
    <React.Fragment>
      <Typography className={classes.text}>
        気になるくらしのスタイルを
        <br />
        選択してください
      </Typography>
      <ul className={classes.lifeStyles}>
        <LifeStyle
          image={peachVisual}
          text={"便利な街でのくらし"}
          color="#BD8E6B"
          onClick={() => changeModal("livingCity")}
        />
        <LifeStyle
          image={bearVisual}
          text={"自然豊かな山あいのくらし"}
          color="#99BC81"
          onClick={() => changeModal("livingMountain")}
        />
        <LifeStyle
          image={birdVisual}
          text={"水辺でのくらし"}
          color="#628FBD"
          onClick={() => changeModal("livingSea")}
        />
      </ul>
      <Typography className={classes.text}>市町村一覧から探す</Typography>
      <div className={classes.wrap}>
        <div className={classes.registerUser}>
          <SquareButton
            variant="contained"
            color="primary"
            className={classes.answerButton}
            onClick={async () => {
              await Sleep.waitRipple();
              window.open("https://needyou.jp/g/fukushima-kurashi-shigoto/");
            }}
          >
            市町村一覧
          </SquareButton>
        </div>
      </div>
      <BackButton onClick={props.closeModal} />
    </React.Fragment>
  );
};
export default SelectLifeStyle;

const useStylesLifeStyle = makeStyles((theme: Theme) =>
  createStyles({
    lifeStyle: {
      padding: "5px",
      margin: "4px",
      textAlign: "center",
      borderRadius: "4px",
    },
    image: {},
    text: {
      margin: "10px",
      color: "#ffffff",
    },
  })
);

interface ILifeStyleProps {
  image: string;
  text: string;
  color: string;
  onClick: () => void;
}
/**
 * くらしのスタイルを選ぶ
 * @param props
 */
const LifeStyle: React.FC<ILifeStyleProps> = (props) => {
  const classes = useStylesLifeStyle();

  return (
    <li
      className={classes.lifeStyle}
      onClick={props.onClick}
      style={{ backgroundColor: props.color }}
    >
      <Image src={props.image} className={classes.image} />
      <Typography className={classes.text}>{props.text}</Typography>
    </li>
  );
};
