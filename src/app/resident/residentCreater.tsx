import { Resident } from "./resident";
import { ResidentA } from "./residentA";
import { IIconProps } from "@/components/virtualSpace/resident/icon";

export class ResidentCreater {
  constructor() {}

  create(props: {
    image: string;
    positionX: number;
    positionY: number;
  }): Resident {
    return new ResidentA(props);
  }
}
