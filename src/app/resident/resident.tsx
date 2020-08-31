import React, { useState, useEffect } from "react";
import { IconProps, ModalProps, ModalContent, HandleAnothers } from "./types";
import ResidentComponent from "@/components/virtualSpace/resident";
import { IIconProps } from "@/components/virtualSpace/resident/icon";
import { IModalProps } from "@/components/virtualSpace/resident/modal";

export abstract class Resident {
  public key: string;
  public iconProps: IconProps | null;
  public modalProps: ModalProps<ModalContent>;
  public handleAnothers: HandleAnothers;

  constructor(
    key: string,
    iconProps: IconProps | null,
    modalProps: ModalProps<ModalContent>,
    handleAnothers: HandleAnothers
  ) {
    this.key = key;
    this.iconProps = iconProps;
    this.modalProps = modalProps;
    this.handleAnothers = handleAnothers;
  }

  abstract generateIcon(props: IIconProps): JSX.Element;
  abstract generateModal(key: string, props: IModalProps): JSX.Element;

  element(opened: boolean, onOpen: () => void, onClose: () => void) {
    return (
      <ResidentComponent
        generator={this}
        opened={opened}
        onOpen={onOpen}
        onClose={onClose}
        key={this.key}
      />
    );
  }
}
