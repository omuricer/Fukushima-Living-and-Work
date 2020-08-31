import React, { useState, useEffect } from "react";
import { Resident } from "./resident";
import {
  default as IconComponent,
  IIconProps,
} from "@/components/virtualSpace/resident/icon";
import ConciergeModal, {
  IConciergeModalProps,
} from "@/components/virtualSpace/resident/modal/conciergeModal/index";

export class ConciergeResident extends Resident {
  generateIcon(props: IIconProps): JSX.Element {
    return <IconComponent {...props} />;
  }
  generateModal(key: string, props: IConciergeModalProps): JSX.Element {
    return <ConciergeModal {...props} />;
  }
}
