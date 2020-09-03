import React, { useState, useEffect } from "react";
import { Resident } from "./resident";
import {
  default as IconComponent,
  IIconProps,
} from "@/components/virtualSpace/resident/icon";
import WorkingModal, {
  IWorkingModalProps,
} from "@/components/virtualSpace/resident/modal/workingModal";

export class WorkingResident extends Resident {
  generateIcon(props: IIconProps): JSX.Element {
    return <IconComponent {...props} />;
  }
  generateModal(props: IWorkingModalProps): JSX.Element {
    return <WorkingModal {...props} />;
  }
}
