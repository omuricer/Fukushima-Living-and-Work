import React, { useState, useEffect } from "react";
import { IIconProps } from "./icon";
import { IModalProps } from "./modal";
import { IconProps, ModalProps } from "@/app/resident/types";

type IResidentProps = {
  icon: {
    props: IconProps;
    generate: (props: IIconProps) => JSX.Element;
  };
  modal: {
    props: ModalProps;
    generate: (props: IModalProps) => JSX.Element;
  };
};
const Resident: React.FC<IResidentProps> = (props) => {
  const [opened, setOpened] = useState<boolean>(false);

  const icon = props.icon.generate({
    ...props.icon.props,
    onClick: () => {
      setOpened(true);
    },
  });
  const modal = props.modal.generate({
    ...props.modal.props,
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
