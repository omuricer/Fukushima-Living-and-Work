import { Resident } from "./resident";
import { ResidentA } from "./residentA";
import { IIconProps } from "@/components/virtualSpace/resident/icon";

export class ResidentCreater {
  constructor() {}

  create(
    iconProps: {
      image: string;
      positionX: number;
      positionY: number;
    },
    modalProps: {}
  ): Resident {
    return new ResidentA(iconProps, modalProps);
  }
}
