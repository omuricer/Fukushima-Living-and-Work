import React, { useState, useEffect } from "react";
import { IconProps, ModalProps, ModalContent } from "./types";
import ResidentComponent from "@/components/virtualSpace/resident";
import { IIconProps } from "@/components/virtualSpace/resident/icon";
import { IModalProps } from "@/components/virtualSpace/resident/modal";

export abstract class Resident {
  private iconProps: IconProps;
  private modalProps: ModalProps<ModalContent>;

  constructor(iconProps: IconProps, modalProps: ModalProps<ModalContent>) {
    this.iconProps = iconProps;
    this.modalProps = modalProps;
  }

  abstract generateIcon(props: IIconProps): JSX.Element;
  abstract generateModal(props: IModalProps): JSX.Element;

  element(key: number) {
    return (
      <ResidentComponent
        icon={{
          generate: this.generateIcon,
          props: this.iconProps,
        }}
        modal={{
          generate: this.generateModal,
          props: this.modalProps,
        }}
        key={key}
      />
    );
  }
}
