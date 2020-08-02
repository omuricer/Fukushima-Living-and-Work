import React, { useState, useEffect } from "react";
import { Icon, Modal } from "./types";
import { IIconProps } from "./icon";
import { IModalProps } from "./modal";

type IResidentProps = {
  iconProps: { image: string; positionX: number; positionY: number };
  generateIcon: (props: IIconProps) => Icon;
  modalProps: {};
  generateModal: (props: IModalProps) => Modal;
};
const Resident: React.FC<IResidentProps> = (props) => {
  const [opened, setOpened] = useState<boolean>(false);

  const icon = props.generateIcon({
    ...props.iconProps,
    onClick: () => {
      setOpened(true);
    },
  });
  const modal = props.generateModal({
    open: opened,
    onClose: () => {
      setOpened(false);
    },
  });

  return (
    <React.Fragment>
      {icon}
      {modal}
    </React.Fragment>
  );
};
export default Resident;
