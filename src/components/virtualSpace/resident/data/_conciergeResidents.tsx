import { Resident } from "@/app/resident/types";
import { ConciergeContent } from "@/components/virtualSpace/resident/modal/conciergeModal/index";
import usagi from "@/image/virtualSpace/icons/icon_1.png";
import workingGirl from "@/image/virtualSpace/icons/icon_2.png";
import usagiTitle from "@/image/virtualSpace/modalTitleIcon/m_top_1.png";
import workingGirlTitle from "@/image/virtualSpace/modalTitleIcon/m_top_2.png";

const ConciergeRegidents: Resident<ConciergeContent>[] = [
  {
    floor: 1,
    key: "conciergeCounter",
    icon: {
      image: usagi,
      positionY: 20,
      positionX: 38,
    },
    modal: {
      content: {
        title: "総合案内",
        icon: usagiTitle,
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
        icon: usagiTitle,
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
      image: workingGirl,
      positionY: 40,
      positionX: 36,
    },
    modal: {
      content: {
        title: "しごと相談室",
        icon: workingGirlTitle,
        headerColor: "#745F74",
        type: "concierge",
        phase: "selectWorkStyle",
      },
    },
  },
  {
    floor: 1,
    key: "conciergeChat",
    modal: {
      content: {
        title: "チャット相談",
        icon: usagiTitle,
        headerColor: "#E9A75B",
        type: "concierge",
        phase: "chat",
      },
    },
  },
];
export default ConciergeRegidents;
