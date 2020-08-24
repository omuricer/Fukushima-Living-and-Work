import { Resident } from "@/app/resident/types";
import { ConciergeContent } from "@/components/virtualSpace/resident/modal/conciergeModal/index";

const ConciergeRegidents: Resident<ConciergeContent>[] = [
  {
    floor: 1,
    key: "conciergeCounter",
    icon: {
      image: "image/virtualSpace/icons/icon.png",
      positionX: 10,
      positionY: 10,
    },
    modal: {
      content: {
        title: "ご相談受付カウンター",
        icon: "icon", // TODO:
        type: "concierge",
        phase: "counter",
      },
    },
  },
  {
    floor: 1,
    key: "conciergeSelectLifeStyle",
    modal: {
      content: {
        title: "ご相談受付カウンター",
        icon: "icon", // TODO:
        type: "concierge",
        phase: "selectLifeStyle",
      },
    },
  },
  {
    floor: 1,
    key: "conciergeSelectWorkStyle",
    modal: {
      content: {
        title: "ご相談受付カウンター",
        icon: "icon", // TODO:
        type: "concierge",
        phase: "selectWorkStyle",
      },
    },
  },
];
export default ConciergeRegidents;
