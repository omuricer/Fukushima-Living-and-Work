import { IconProps, ModalProps } from "@/app/resident/types";
import { ConciergeContent } from "@/components/virtualSpace/resident/modal/conciergeModal";

type Resident = {
  icon: IconProps;
  modal: ModalProps<ConciergeContent>;
};
const ConciergeRegidents: Resident[] = [
  {
    icon: {
      image: "image/virtualSpace/icons/icon.png",
      positionX: 30,
      positionY: 100,
    },
    modal: {
      content: {
        title: "ご相談受付カウンター",
        icon: "icon", // TODO:
        type: "concierge",
      },
    },
  },
];
export default ConciergeRegidents;
