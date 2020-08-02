import { Icon, Modal } from "./types";

export abstract class Resident {
  icon: Icon;
  modal: Modal;

  constructor() {
    this.icon = this.generateIcon();
    this.modal = this.generateModal();
  }

  abstract generateIcon(): Icon;
  abstract generateModal(): Modal;
}
