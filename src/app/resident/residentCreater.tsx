import { Resident } from "./resident";
import { LivingResident } from "./livingResident";
import { ProjectionResident } from "./projectionResident";
import { ConciergeResident } from "./conciergeResident";
import {
  IconProps,
  ModalProps,
  ModalContent,
  isLivingModal,
  isProjectionModal,
  isConciergeModal,
} from "./types";

export class ResidentCreater {
  constructor() {}

  create(iconProps: IconProps, modalProps: ModalProps<ModalContent>): Resident {
    if (isLivingModal(modalProps)) {
      return new LivingResident(iconProps, modalProps);
    }
    if (isProjectionModal(modalProps)) {
      return new ProjectionResident(iconProps, modalProps);
    }
    if (isConciergeModal(modalProps)) {
      return new ConciergeResident(iconProps, modalProps);
    }
    return new LivingResident(iconProps, modalProps);
  }
}
