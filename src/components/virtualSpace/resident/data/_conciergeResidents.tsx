import { Resident } from "@/app/resident/types";
import { ConciergeContent } from "@/components/virtualSpace/resident/modal/conciergeModal/index";

const ConciergeRegidents: Resident<ConciergeContent>[] = [
  {
    key: "conciergeCounter",
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
        phase: "counter",
      },
    },
  },
  {
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
