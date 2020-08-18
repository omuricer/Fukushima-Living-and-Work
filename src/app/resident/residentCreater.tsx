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
  private props: { openConciergeModal: () => void };
  constructor(props: { openConciergeModal: () => void }) {
    this.props = props;
  }

  create(iconProps: IconProps, modalProps: ModalProps<ModalContent>): Resident {
    if (isLivingModal(modalProps)) {
      return new LivingResident(iconProps, modalProps, this.props);
    }
    if (isProjectionModal(modalProps)) {
      return new ProjectionResident(iconProps, modalProps, this.props);
    }
    if (isConciergeModal(modalProps)) {
      return new ConciergeResident(iconProps, modalProps, this.props);
    }
    return new LivingResident(iconProps, modalProps, this.props);
  }
}
