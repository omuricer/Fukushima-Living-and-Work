import React, { useState, useEffect } from "react";
import { Icon, Modal } from "./types";
import { Resident } from "./resident";

export class ResidentA extends Resident {
  generateIcon(): Icon {
    // TODO: 書く
    return <React.Fragment>icon</React.Fragment>;
  }
  generateModal(): Modal {
    // TODO: 書く
    return <React.Fragment>modal</React.Fragment>;
  }
}
