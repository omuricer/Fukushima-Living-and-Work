import React, { useState, useEffect } from "react";
import { Resident } from "./resident";
import {
  default as IconComponent,
  IIconProps,
} from "@/components/virtualSpace/resident/icon";
import { IlivingModalProps } from "@/components/virtualSpace/resident/modal/livingModal";
import { default as ModalComponent } from "@/components/virtualSpace/resident/modal/livingModal";

export class LivingResident extends Resident {
  generateIcon(props: IIconProps): JSX.Element {
    return <IconComponent {...props} />;
  }
  generateModal(props: IlivingModalProps): JSX.Element {
    return <ModalComponent {...props} />;
  }
}
