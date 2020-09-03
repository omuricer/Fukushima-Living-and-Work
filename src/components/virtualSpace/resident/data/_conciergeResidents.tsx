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
        title: "総合案内",
        icon: "icon", // TODO:
        headerColor: "#E9A75B",
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
        title: "",
        icon: "icon", // TODO:
        headerColor: "#E9A75B",
        type: "concierge",
        phase: "selectLifeStyle",
      },
    },
  },
  {
    floor: 2,
    key: "conciergeSelectWorkStyle",
    icon: {
      image: "image/virtualSpace/icons/icon.png",
      positionX: 10,
      positionY: 10,
    },
    modal: {
      content: {
        title: "しごと相談室",
        icon: "icon", // TODO:
        headerColor: "#745F74",
        type: "concierge",
        phase: "selectWorkStyle",
      },
    },
  },
];
export default ConciergeRegidents;
