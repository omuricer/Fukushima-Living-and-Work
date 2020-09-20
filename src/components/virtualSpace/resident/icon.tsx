import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Bounds } from "@/animations/bounds";
import { useWindowDimensions } from "@/hooks/windowDimensions";

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
  const [naturalWidth, setNaturalWidth] = useState<number>(0);
  const { width, height } = useWindowDimensions();
  const backgroundImageWidth = 750;

  useEffect(() => {
    const asyncs = async () => {
      const naturalSize = await requestImageNaturalSize(props.image);
      setNaturalWidth(naturalSize.natulalWidth);
    };
    asyncs();
  }, []);

  const classes = useStyles();
  return (
    <img
      src={props.image}
      className={classes.bounds}
      style={{
        position: "absolute",
        top: `calc(${props.positionY}%)`,
        left: `calc(${props.positionX}%)`,
        animationDelay: `${generateRondomDelay()}s`,
        width: `calc((${width} / ${backgroundImageWidth}) * ${naturalWidth}px)`,
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

const requestImageNaturalSize = async (
  src: string
): Promise<{ natulalWidth: number; natulalHeight: number }> => {
  const image = new Image();
  image.src = src;
  return new Promise<{ natulalWidth: number; natulalHeight: number }>(
    (resolve) => {
      image.addEventListener(
        "load",
        () => {
          resolve({
            natulalWidth: image.naturalWidth,
            natulalHeight: image.naturalHeight,
          });
        },
        false
      );
    }
  );
};


export default Icon;
