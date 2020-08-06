import { Resident } from "./resident";
import { LivingResident } from "./livingResident";
import { IconProps, ModalProps, ModalContent, isLivingModal } from "./types";

export class ResidentCreater {
  constructor() {}

  create(iconProps: IconProps, modalProps: ModalProps<ModalContent>): Resident {
    if (isLivingModal(modalProps)) {
      return new LivingResident(iconProps, modalProps);
    }
    return new LivingResident(iconProps, modalProps);
  }
}
