import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useSpring, animated } from "react-spring";
import Backdrop from "@material-ui/core/Backdrop";
import Image from "@/components/form/image";
import backgroundImage from "@/image/background.jpg";
import menuBackgroundImage from "@/image/menu_bg.png";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: `url(${backgroundImage})`,
      zIndex: theme.zIndex.drawer + 1,
    },
    boad: {
      position: "relative",
    },
    boadImage: {
      width: "80vw",
    },
    menu: {
      top: "23%",
      left: "50%",
      margin: "0",
      padding: "0",
      position: "absolute",
      transform: "translateX(-50%)",
      WebkitTransform: "translateX(-50%)",
      width: "60vw",
      color: "#ffffff",
    },
    button: {
      padding: "0",
      display: "block",
      width: "100%",
    },
    li: {
      borderTop: "1px solid #ffffff",
      display: "block",
      lineHeight: "3rem",
      "&:last-child": {
        borderBottom: "1px solid #ffffff",
      },
    },
    floor: {
      marginRight: "10px",
      display: "inline",
    },
    name: {
      display: "inline",
    },
  })
);

interface IListProps {
  isVisible: boolean;
  closeMenu: () => void;
}
const List: React.FC<IListProps> = (props) => {
  const classes = useStyles();

  const list = [
    {
      floor: "7F",
      name: "動画配信シアター",
    },
    {
      floor: "6F",
      name: "福島県を学ぶ",
    },
    {
      floor: "5F",
      name: "街のあるくらし",
    },
    {
      floor: "4F",
      name: "山のあるくらし",
    },
    {
      floor: "3F",
      name: "海・湖のあるくらし",
    },
    {
      floor: "2F",
      name: "●●●●●●●●（しごと）",
    },
    {
      floor: "1F",
      name: "個別相談予約カウンター",
    },
  ].map((m) => (
    <Button className={classes.button}>
      <li className={classes.li}>
        <Typography className={classes.floor} color="textSecondary">
          {m.floor}
        </Typography>
        <Typography className={classes.name} color="textSecondary">
          {m.name}
        </Typography>
      </li>
    </Button>
  ));

  const springProps = useSpring({
    opacity: props.isVisible ? 1 : 0,
  });
  return (
    <Backdrop
      className={classes.root}
      open={props.isVisible}
      onClick={props.closeMenu}
    >
      <animated.div style={springProps}>
        <div className={classes.boad}>
          <Image src={menuBackgroundImage} className={classes.boadImage} />
          <menu className={classes.menu}>{list}</menu>
        </div>
      </animated.div>
    </Backdrop>
  );
};
export default List;
