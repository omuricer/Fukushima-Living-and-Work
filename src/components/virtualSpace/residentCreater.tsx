import { Resident } from "./resident/resident";
import { ResidentA } from "./resident/residentA";

export abstract class ResidentCreater {
  constructor() {}

  create(): Resident {
    return new ResidentA();
  }
}
