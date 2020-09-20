import { Resident } from "@/app/resident/types";
import { LivingContent } from "@/components/virtualSpace/resident/modal/livingModal";
import bird from "@/image/virtualSpace/icons/icon_3.png";
import bear from "@/image/virtualSpace/icons/icon_4.png";
import peach from "@/image/virtualSpace/icons/icon_5.png";
import birdTitle from "@/image/virtualSpace/modalTitleIcon/m_top_3.png";
import bearTitle from "@/image/virtualSpace/modalTitleIcon/m_top_4.png";
import peachTitle from "@/image/virtualSpace/modalTitleIcon/m_top_5.png";
import birdVisual from "@/image/virtualSpace/icons/icon_3.png"; // TODO: 正式な画像を設定
import bearVisual from "@/image/virtualSpace/icons/icon_4.png"; // TODO: 正式な画像を設定
import peachVisual from "@/image/virtualSpace/icons/icon_5.png";// TODO: 正式な画像を設定

const LivingRegidents: Resident<LivingContent>[] = [
  {
    floor: 3,
    key: "livingSea",
    icon: {
      image: bird,
      positionY: 43,
      positionX: 29,
    },
    modal: {
      content: {
        type: "living",
        icon: birdTitle,
        headerColor: "#628FBD",
        headerColorDark: "#42709f",
        title: "水辺でのくらし",
        visual: birdVisual,
        advisors: [
          {
            id: "1",
            name: "団体名",
            inCharge: {
              name: "担当者名", // TODO:
              icon: "icon",
            },
          },
          {
            id: "1",
            name: "団体名",
            inCharge: {
              name: "担当者名", // TODO:
              icon: "icon",
            },
          },
          {
            id: "1",
            name: "団体名",
            inCharge: {
              name: "担当者名", // TODO:
              icon: "icon",
            },
          },
        ],
      },
    },
  },
  {
    floor: 4,
    key: "livingMountain",
    icon: {
      image: bear,
      positionY: 42,
      positionX: 16,
    },
    modal: {
      content: {
        type: "living",
        icon: bearTitle,
        headerColor: "#99BC81",
        headerColorDark: "#739b58",
        title: "自然豊かな山あいのくらし",
        visual: bearVisual,
        advisors: [
          {
            id: "1",
            name: "団体名",
            inCharge: {
              name: "担当者名", // TODO:
              icon: "icon",
            },
          },
          {
            id: "1",
            name: "団体名",
            inCharge: {
              name: "担当者名", // TODO:
              icon: "icon",
            },
          },
          {
            id: "1",
            name: "団体名",
            inCharge: {
              name: "担当者名", // TODO:
              icon: "icon",
            },
          },
        ],
      },
    },
  },
  {
    floor: 5,
    key: "livingCity",
    icon: {
      image: peach,
      positionY: 36,
      positionX: 35,
    },
    modal: {
      content: {
        type: "living",
        icon: peachTitle,
        headerColor: "#BD8E6B",
        headerColorDark: "#a57a59",
        title: "便利な街でのくらし",
        visual: peachVisual,
        advisors: [
          {
            id: "1",
            name: "団体名",
            inCharge: {
              name: "担当者名", // TODO:
              icon: "icon",
            },
          },
          {
            id: "1",
            name: "団体名",
            inCharge: {
              name: "担当者名", // TODO:
              icon: "icon",
            },
          },
          {
            id: "1",
            name: "団体名",
            inCharge: {
              name: "担当者名", // TODO:
              icon: "icon",
            },
          },
        ],
      },
    },
  },
];
export default LivingRegidents;
