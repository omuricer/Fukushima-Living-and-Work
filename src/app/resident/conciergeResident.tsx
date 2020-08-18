import React, { useState, useEffect } from "react";
import { Resident } from "./resident";
import {
  default as IconComponent,
  IIconProps,
} from "@/components/virtualSpace/resident/icon";
import ConciergeModal, {
  IConciergeModalProps,
} from "@/components/virtualSpace/resident/modal/conciergeModal";

export class ConciergeResident extends Resident {
  generateIcon(props: IIconProps): JSX.Element {
    return <IconComponent {...props} />;
  }
  generateModal(props: IConciergeModalProps): JSX.Element {
    return <ConciergeModal {...props} />;
  }
}
