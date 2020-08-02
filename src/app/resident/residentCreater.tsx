import { Resident } from "./resident";
import { ResidentA } from "./residentA";

export class ResidentCreater {
  constructor() {}

  create(): Resident {
    return new ResidentA();
  }
}
