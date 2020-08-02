import React, { useState, useEffect } from "react";
import { Icon, Modal } from "./types";
import { Resident } from "./resident";
import {
  default as IconComponent,
  IIconProps,
} from "@/components/virtualSpace/resident/icon";

export class ResidentA extends Resident {
  generateIcon(props: IIconProps): Icon {
    // TODO: 書く
    return (
      <IconComponent
        image={props.image}
        positionX={props.positionX}
        positionY={props.positionY}
        onClick={props.onClick}
      >
        icon
      </IconComponent>
    );
  }
  generateModal(): Modal {
    // TODO: 書く
    return <React.Fragment>modal</React.Fragment>;
  }
}
