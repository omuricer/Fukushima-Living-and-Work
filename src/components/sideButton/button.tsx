import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useSpring, animated } from "react-spring";
import Image from "@/components/form/image";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: "10px",
      cursor: "pointer",
      position: "relative",
    },
    image: {
      width: "100%",
    },
    label: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translateY(-50%) translateX(-50%) rotateZ(-90deg)",
      WebkitTransform: "translateY(-50%) translateX(-50%) rotateZ(-90deg)",
      whiteSpace: "nowrap",
      color: "#ffffff",
    },
  })
);

interface IButtonProps extends React.HTMLProps<HTMLDivElement> {
  isVisible: boolean;
  visibleDelay: number;
  image: string;
}
const Button: React.FC<IButtonProps> = (props) => {
  const classes = useStyles();

  const springProps = useSpring({
    from: {
      transform: "translateX(100px)",
    },
    to: props.isVisible
      ? {
          transform: "translateX(0)",
        }
      : {
          transform: "translateX(100px)",
        },
    delay: props.isVisible ? props.visibleDelay : 0,
  });

  // refの型がanimated.divの引数と一致しないため除外
  const { ref, isVisible, visibleDelay, ...divProps } = { ...props };
  return (
    <animated.div className={classes.root} style={springProps} {...divProps}>
      <Image src={props.image} className={classes.image} />
      <div className={classes.label}>{props.children}</div>
    </animated.div>
  );
};
export default Button;
