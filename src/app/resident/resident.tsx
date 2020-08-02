import React, { useState, useEffect } from "react";
import { Icon, Modal } from "./types";
import ResidentComponent from "@/components/virtualSpace/resident";
import { IIconProps } from "@/components/virtualSpace/resident/icon";
import { IModalProps } from "@/components/virtualSpace/resident/modal";

export abstract class Resident {
  private iconProps: { image: string; positionX: number; positionY: number };
  private modalProps: {};

  constructor(
    iconProps: {
      image: string;
      positionX: number;
      positionY: number;
    },
    modalProps: {}
  ) {
    this.iconProps = iconProps;
    this.modalProps = modalProps;
  }

  abstract generateIcon(props: IIconProps): Icon;
  abstract generateModal(props: IModalProps): Modal;

  element(key: number) {
    return (
      <ResidentComponent
        generateIcon={this.generateIcon}
        iconProps={this.iconProps}
        generateModal={this.generateModal}
        modalProps={this.modalProps}
        key={key}
      />
    );
  }
}
