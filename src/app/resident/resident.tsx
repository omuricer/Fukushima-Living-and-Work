import React, { useState, useEffect } from "react";
import { IconProps, ModalProps, ModalContent } from "./types";
import ResidentComponent from "@/components/virtualSpace/resident";
import { IIconProps } from "@/components/virtualSpace/resident/icon";
import { IModalProps } from "@/components/virtualSpace/resident/modal";

export abstract class Resident {
  public iconProps: IconProps;
  public modalProps: ModalProps<ModalContent>;
  protected openAnotherModals: { openConciergeModal: () => void };

  constructor(
    iconProps: IconProps,
    modalProps: ModalProps<ModalContent>,
    props: { openConciergeModal: () => void }
  ) {
    this.iconProps = iconProps;
    this.modalProps = modalProps;
    this.openAnotherModals = props;
  }

  abstract generateIcon(props: IIconProps): JSX.Element;
  abstract generateModal(props: IModalProps): JSX.Element;

  element(
    key: string,
    opened: boolean,
    onOpen: () => void,
    onClose: () => void
  ) {
    return (
      <ResidentComponent
        generator={this}
        // icon={{
        //   generate: this.generateIcon,
        //   props: this.iconProps,
        // }}
        // modal={{
        //   generate: this.generateModal,
        //   props: this.modalProps,
        // }}
        opened={opened}
        onOpen={onOpen}
        onClose={onClose}
        key={key}
      />
    );
  }
}
