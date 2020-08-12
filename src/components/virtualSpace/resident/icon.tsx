import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Bounds } from "@/animations/bounds";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...Bounds,
  })
);

export type IIconProps = {
  image: string;
  positionX: number;
  positionY: number;
  onClick: () => void;
};
const Icon: React.FC<IIconProps> = (props) => {
  const classes = useStyles();
  return (
    <img
      src={props.image}
      className={classes.bounds}
      style={{
        position: "absolute",
        // width: `calc(0.25 * ${props.ratio} * ${naturalWidth}px)`,
        top: `calc(${props.positionY}%)`,
        left: `calc(${props.positionX}%)`,
        animationDelay: `${generateRondomDelay()}s`,
      }}
      onClick={props.onClick}
    />
  );
};

const generateRondomDelay = (): number => {
  return roundAtDigit(Math.random() * 6, 2);
};
const roundAtDigit = (num: number, digit: number): number => {
  // num = 1.2345 & digit = 2 --> 1.23
  return Math.floor(num * Math.pow(10, digit)) / Math.pow(10, digit);
};

export default Icon;
