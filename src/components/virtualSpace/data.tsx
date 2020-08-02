import { IconProps, ModalProps } from "./resident/types";

export type ResidentDefinition = { icon: IconProps; modal: ModalProps };
const RegidentsDefinitions: ResidentDefinition[] = [
  {
    icon: {
      image: "image/loading/star.gif",
      positionX: 10,
      positionY: 10,
    },
    modal: {},
  },
  {
    icon: {
      image: "image/loading/star.gif",
      positionX: 10,
      positionY: 10,
    },
    modal: {},
  },
];
export default RegidentsDefinitions;
