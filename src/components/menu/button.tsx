import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useSpring, animated } from "react-spring";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menu: {
      position: "fixed",
      width: "40px",
      height: "80px",
      backgroundColor: "gray",
      top: "10vh",
      right: "0",
      zIndex: 1,
    },
  })
);

interface IButtonProps extends React.HTMLProps<HTMLDivElement> {
  isVisible: boolean;
}
const Button: React.FC<IButtonProps> = (props) => {
  const classes = useStyles();

  const springProps = useSpring({
    opacity: props.isVisible ? 1 : 0,
  });

  // refの型がanimated.divの引数と一致しないため除外
  const { ref, isVisible, ...divProps } = { ...props };
  return (
    <animated.div className={classes.menu} style={springProps} {...divProps} />
  );
};
export default Button;
