import React, { useState, useEffect } from "react";
import { Resident } from "./resident";
import {
  default as IconComponent,
  IIconProps,
} from "@/components/virtualSpace/resident/icon";
import LivingModal, {
  ILivingModalProps,
} from "@/components/virtualSpace/resident/modal/livingModal";

export class LivingResident extends Resident {
  generateIcon(props: IIconProps): JSX.Element {
    return <IconComponent {...props} />;
  }
  generateModal(key: string, props: ILivingModalProps): JSX.Element {
    return <LivingModal {...props} />;
  }
}
