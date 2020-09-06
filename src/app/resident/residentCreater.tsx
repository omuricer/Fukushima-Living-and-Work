import { Resident } from "./resident";
import { LivingResident } from "./livingResident";
import { ProjectionResident } from "./projectionResident";
import { ConciergeResident } from "./conciergeResident";
import { WorkingResident } from "./workingResident";
import {
  IconProps,
  ModalProps,
  ModalContent,
  isLivingModal,
  isProjectionModal,
  isConciergeModal,
  isWorkingModal,
  HandleAnothers,
} from "./types";

export class ResidentCreater {
  private handleAnothers: HandleAnothers;
  constructor(handleAnothers: HandleAnothers) {
    this.handleAnothers = handleAnothers;
  }

  create(
    key: string,
    modalKey: string,
    iconProps: IconProps | null,
    modalProps: ModalProps<ModalContent>
  ): Resident {
    if (isLivingModal(modalProps)) {
      return new LivingResident(
        key,
        modalKey,
        iconProps,
        modalProps,
        this.handleAnothers
      );
    }
    if (isProjectionModal(modalProps)) {
      return new ProjectionResident(
        key,
        modalKey,
        iconProps,
        modalProps,
        this.handleAnothers
      );
    }
    if (isConciergeModal(modalProps)) {
      return new ConciergeResident(
        key,
        modalKey,
        iconProps,
        modalProps,
        this.handleAnothers
      );
    }
    if (isWorkingModal(modalProps)) {
      return new WorkingResident(
        key,
        modalKey,
        iconProps,
        modalProps,
        this.handleAnothers
      );
    }
    return new LivingResident(
      key,
      modalKey,
      iconProps,
      modalProps,
      this.handleAnothers
    );
  }
}
