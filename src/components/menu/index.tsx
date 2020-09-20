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
      height: "95vh",
      maxHeight: "570px",
    },
    menu: {
      top: "23%",
      left: "50%",
      margin: "0",
      padding: "0",
      position: "absolute",
      transform: "translateX(-50%)",
      WebkitTransform: "translateX(-50%)",
      width: "75%",
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
      lineHeight: "3rem",
      display: "flex",
      alignItems: "center",
      paddingTop: "1vh",
      paddingBottom: "1vh",
      paddingLeft: "1vh",
    },
    floor: {
      marginRight: "10px",
      display: "inline",
    },
    discript: {
      display: "flex",
      flexFlow: "column",
    },
    name: {
      display: "inline",
    },
    text: {
      color: "#cecece",
      whiteSpace: "pre-wrap",
    },
    close: {
      position: "absolute",
      top: "10px",
      right: "10px",
      color: "#ffffff"
    },
  })
);

interface IMenuProps {
  isVisible: boolean;
  closeMenu: () => void;
  sclollToFloors: (() => void)[];
  openModal: (modalKey: string) => void;
}
const Menu: React.FC<IMenuProps> = (props) => {
  const classes = useStyles();

  const handleClickMenu = (modalKey: string) => {
    // const handleClickMenu = (sclollToFloors: () => void) => {
    props.closeMenu();
    // sclollToFloors();
    props.openModal(modalKey);
  };
  const list = [
    {
      floor: "1F",
      name: "総合案内",
      text: "何から相談するか\n悩んだらこちら！",
      modalKey: "conciergeCounter",
    },
    {
      floor: "2F",
      name: "しごと相談室",
      text: "仕事の相談をしたい方",
      modalKey: "conciergeSelectWorkStyle",
    },
    {
      floor: "3F",
      name: "水辺のあるくらし",
      text: "海や湖の近くで暮らしたい方",
      modalKey: "livingSea",
    },
    {
      floor: "4F",
      name: "自然豊かな山あいのくらし",
      text: "大自然の中で暮らしたい方",
      modalKey: "livingMountain",
    },
    {
      floor: "5F",
      name: "便利な街でのくらし",
      text: "利便性を重視する方",
      modalKey: "livingCity",
    },
    {
      floor: "6F",
      name: "市町村相談",
      text: "相談したい市町村がある方",
      modalKey: "livingXXXX",
    },
    {
      floor: "7F",
      name: "動画シアター",
      text: "トークライブや\n移住関連動画をチェック！",
      modalKey: "projection",
    },
  ].map((m, i) => (
    <Button
      key={i}
      className={classes.button}
      onClick={async () => {
        if (!m.modalKey) return;
        await Sleep.waitRipple();
        // handleClickMenu(props.sclollToFloors[i]);
        handleClickMenu(m.modalKey);
      }}
    >
      <li className={classes.li}>
        <Typography className={classes.floor} color="textSecondary">
          {m.floor}
        </Typography>
        <div className={classes.discript}>
          <Typography className={classes.name} color="textSecondary">
            {m.name}
          </Typography>
          <Typography className={classes.text} variant="body2">
            {m.text}
          </Typography>
        </div>
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
