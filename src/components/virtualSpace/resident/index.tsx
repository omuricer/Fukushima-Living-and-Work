import React, { useState, useEffect } from "react";
import { Icon, Modal } from "./types";
import { IIconProps } from "./icon";

type IResidentProps = {
  iconProps: { image: string; positionX: number; positionY: number };
  generateIcon: (props: IIconProps) => Icon;
  modal: Modal;
};
const Resident: React.FC<IResidentProps> = (props) => {
  const [opened, setOpened] = useState<boolean>(false);

  const icon = props.generateIcon({
    ...props.iconProps,
    onClick: () => {
      setOpened(true);
    },
  });

  return (
    <React.Fragment>
      {icon}
      {props.modal}
    </React.Fragment>
  );
};
export default Resident;
