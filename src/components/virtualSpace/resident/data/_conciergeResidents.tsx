import { Resident } from "@/app/resident/types";
import { ConciergeContent } from "@/components/virtualSpace/resident/modal/conciergeModal";

const ConciergeRegidents: Resident<ConciergeContent>[] = [
  {
    key: "concierge",
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
