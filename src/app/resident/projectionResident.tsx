import React, { useState, useEffect } from "react";
import { Resident } from "./resident";
import {
  default as IconComponent,
  IIconProps,
} from "@/components/virtualSpace/resident/icon";
import ProjectionModal, {
  IProjectionModalProps,
} from "@/components/virtualSpace/resident/modal/projectionModal";

export class ProjectionResident extends Resident {
  generateIcon(props: IIconProps): JSX.Element {
    return <IconComponent {...props} />;
  }
  generateModal(props: IProjectionModalProps): JSX.Element {
    return (
      <ProjectionModal
        {...{
          ...props,
          openConciergeModal: this.openAnotherModals.openConciergeModal,
        }}
      />
    );
  }
}
