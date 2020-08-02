import React, { useState, useEffect } from "react";
import { Icon, Modal } from "./types";
import ResidentComponent from "@/components/virtualSpace/resident";
import { IIconProps } from "@/components/virtualSpace/resident/icon";

export abstract class Resident {
  private iconProps: { image: string; positionX: number; positionY: number };

  constructor(props: { image: string; positionX: number; positionY: number }) {
    this.iconProps = props;
  }

  abstract generateIcon(props: IIconProps): Icon;
  abstract generateModal(): Modal;

  element(key: number) {
    return (
      <ResidentComponent
        generateIcon={this.generateIcon}
        iconProps={this.iconProps}
        modal={this.generateModal()}
        key={key}
      />
    );
  }
}
