import { Resident } from "./resident";
import { ResidentA } from "./residentA";
import { IconProps, ModalProps } from "./types";

export class ResidentCreater {
  constructor() {}

  create(iconProps: IconProps, modalProps: ModalProps): Resident {
    return new ResidentA(iconProps, modalProps);
  }
}
