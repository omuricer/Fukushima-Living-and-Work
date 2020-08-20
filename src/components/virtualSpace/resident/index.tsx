import React, { useState, useEffect } from "react";
import { Resident as Generator } from "@/app/resident/resident";

type IResidentProps = {
  opened: boolean;
  onOpen: () => void;
  onClose: () => void;
  generator: Generator;
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
    handleAnothers: props.generator.handleAnothers,
  });

  return (
    <React.Fragment>
      {icon}
      {modal}
    </React.Fragment>
  );
};
export default Resident;
