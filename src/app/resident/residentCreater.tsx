import { Resident } from "./resident";
import { LivingResident } from "./livingResident";
import { ProjectionResident } from "./projectionResident";
import {
  IconProps,
  ModalProps,
  ModalContent,
  isLivingModal,
  isProjectionModal,
} from "./types";
import { isProjectionContent } from "@/components/virtualSpace/resident/modal/projectionModal";

export class ResidentCreater {
  constructor() {}

  create(iconProps: IconProps, modalProps: ModalProps<ModalContent>): Resident {
    if (isLivingModal(modalProps)) {
      return new LivingResident(iconProps, modalProps);
    }
    if (isProjectionModal(modalProps)) {
      return new ProjectionResident(iconProps, modalProps);
    }
    return new LivingResident(iconProps, modalProps);
  }
}
