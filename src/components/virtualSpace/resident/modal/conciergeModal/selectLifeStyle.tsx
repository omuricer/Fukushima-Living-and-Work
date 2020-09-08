import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Image from "@/components/form/image";
import Typography from "@material-ui/core/Typography";
import { IConciergeModalProps } from "./index";
import BackButton from "@/components/form/backButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      margin: "15px",
    },
    lifeStyles: {
      display: "flex",
      flexFlow: "wrap",
      justifyContent: "space-around",
      marginTop: "15px",
      marginBottom: "25px",
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
          image={"moutain"}
          text={"山のあるくらし"}
          color="green"
          onClick={() => changeModal("livingMountain")}
        />
        <LifeStyle
          image={"livingSea"}
          text={"海・湖のあるくらし"}
          color="blue"
          onClick={() => changeModal("livingSea")}
        />
        <LifeStyle
          image={"culture"}
          text={"文化のあるくらし"}
          color="purple"
          onClick={() => changeModal("livingCulture")}
        />
        <LifeStyle
          image={"moutain"}
          text={"街のあるくらし"}
          color="red"
          onClick={() => changeModal("livingCity")}
        />
      </ul>
      <BackButton onClick={props.closeModal} />
    </React.Fragment>
  );
};
export default SelectLifeStyle;

const useStylesLifeStyle = makeStyles((theme: Theme) =>
  createStyles({
    lifeStyle: {
      width: "47%",
      padding: "5px",
      margin: "4px",
      textAlign: "center",
      borderRadius: "4px",
    },
    image: {},
    text: {
      marginTop: "5px",
      color: "#ffffff",
      letterSpacing: "0",
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
