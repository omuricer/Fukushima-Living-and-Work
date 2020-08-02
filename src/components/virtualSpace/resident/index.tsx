import React, { useState, useEffect } from "react";
import { Icon, Modal } from "./types";

type IResidentProps = {
  icon: Icon;
  modal: Modal;
};
const Resident: React.FC<IResidentProps> = (props) => {
  return (
    <React.Fragment>
      {props.icon}
      {props.modal}
    </React.Fragment>
  );
};
export default Resident;
