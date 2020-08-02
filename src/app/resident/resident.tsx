import React, { useState, useEffect } from "react";
import { Icon, Modal } from "./types";
import ResidentComponent from "@/components/virtualSpace/resident";

export abstract class Resident {
  icon: Icon;
  modal: Modal;

  constructor() {
    this.icon = this.generateIcon();
    this.modal = this.generateModal();
  }

  abstract generateIcon(): Icon;
  abstract generateModal(): Modal;

  element(key: number) {
    return <ResidentComponent icon={this.icon} modal={this.modal} key={key} />;
  }
}
