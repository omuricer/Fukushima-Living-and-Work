import React, { useState, useEffect } from "react";
import { Icon, Modal } from "./types";
import { Resident } from "./resident";
import {
  default as IconComponent,
  IIconProps,
} from "@/components/virtualSpace/resident/icon";
import { IModalProps } from "@/components/virtualSpace/resident/modal";
import { default as ModalComponent } from "@/components/virtualSpace/resident/a/modal";

export class ResidentA extends Resident {
  generateIcon(props: IIconProps): Icon {
    return <IconComponent {...props} />;
  }
  generateModal(props: IModalProps): Modal {
    return <ModalComponent {...props} />;
  }
}
