import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useSpring, animated } from "react-spring";
import Backdrop from "@material-ui/core/Backdrop";
import Image from "@/components/form/image";
import backgroundImage from "@/image/background.jpg";
import menuBackgroundImage from "@/image/menu_bg.png";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Sleep from "@/app/libs/sleep";

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
      height: "70vh",
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
      borderRadius: 0,
      borderTop: "1px solid #ffffff",
      "&:last-child": {
        borderBottom: "1px solid #ffffff",
      },
    },
    li: {
      display: "block",
      lineHeight: "3rem",
    },
    floor: {
      marginRight: "10px",
      display: "inline",
    },
    name: {
      display: "inline",
    },
    close: {
      position: "absolute",
      top: "10px",
      right: "10px",
    },
  })
);

interface IMenuProps {
  isVisible: boolean;
  closeMenu: () => void;
  sclollToFloors: (() => void)[];
}
const Menu: React.FC<IMenuProps> = (props) => {
  const classes = useStyles();

  const handleClickMenu = (sclollToFloors: () => void) => {
    props.closeMenu();
    sclollToFloors();
  };
  const list = [
    {
      floor: "1F",
      name: "個別相談予約カウンター",
    },
    {
      floor: "2F",
      name: "●●●●（しごと）",
    },
    {
      floor: "3F",
      name: "海・湖のあるくらし",
    },
    {
      floor: "4F",
      name: "山のあるくらし",
    },
    {
      floor: "5F",
      name: "街のあるくらし",
    },
    {
      floor: "6F",
      name: "福島県を学ぶ",
    },
    {
      floor: "7F",
      name: "動画配信シアター",
    },
  ].map((m, i) => (
    <Button
      key={i}
      className={classes.button}
      onClick={async () => {
        await Sleep.waitRipple();
        handleClickMenu(props.sclollToFloors[i]);
      }}
    >
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
  list.reverse();

  const springProps = useSpring({
    opacity: props.isVisible ? 1 : 0,
    animationDelay: `1s`, // TODO: 効いてない
  });
  return (
    <Backdrop
      className={classes.root}
      open={props.isVisible}
      onClick={props.closeMenu}
    >
      <animated.div style={springProps} onClick={(e) => e.stopPropagation()}>
        <div className={classes.boad}>
          <Image src={menuBackgroundImage} className={classes.boadImage} />
          <IconButton
            onClick={async () => {
              await Sleep.waitRipple();
              props.closeMenu();
            }}
            className={classes.close}
            color="secondary"
          >
            <Icon style={{ fontSize: "3rem" }}>close</Icon>
          </IconButton>
          <menu className={classes.menu}>{list}</menu>
        </div>
      </animated.div>
    </Backdrop>
  );
};
export default Menu;
