import React, { useState, useEffect } from "react";
import { Icon, Modal } from "./types";

export type IIconProps = {
  image: string;
  positionX: number;
  positionY: number;
  onClick: () => void;
};
const Icon: React.FC<IIconProps> = (props) => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <img
      src={props.image}
      // className={[classes.shop, classes.bounds].join(" ")}
      style={{
        // width: `calc(0.25 * ${props.ratio} * ${naturalWidth}px)`,
        top: `calc(${props.positionY}%)`,
        left: `calc(${props.positionX}%)`,
        // animationDelay: `${generateRondomDelay()}s`,
      }}
      onClick={props.onClick}
    />
  );
};
export default Icon;
