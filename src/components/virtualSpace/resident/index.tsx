import React, { useState, useEffect } from "react";
import { IIconProps } from "./icon";
import { IModalProps } from "./modal";
import { IconProps, ModalProps, ModalContent } from "@/app/resident/types";
import { Resident as Generator } from "@/app/resident/resident";

type IResidentProps = {
  opened: boolean;
  onOpen: () => void;
  onClose: () => void;
  generator: Generator;
  // icon: {
  //   props: IconProps;
  //   generate: (props: IIconProps) => JSX.Element;
  // };
  // modal: {
  //   props: ModalProps<ModalContent>;
  //   generate: (props: IModalProps) => JSX.Element;
  // };
};
const Resident: React.FC<IResidentProps> = (props) => {
  const icon = props.generator.generateIcon({
    ...props.generator.iconProps,
    onClick: () => {
      props.onOpen();
    },
  });
  const modal = props.generator.generateModal({
    ...props.generator.modalProps,
    open: props.opened,
    closeModal: () => {
      props.onClose();
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
