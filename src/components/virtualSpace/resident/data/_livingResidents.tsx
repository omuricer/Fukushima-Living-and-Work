import { Resident } from "@/app/resident/types";
import { LivingContent } from "@/components/virtualSpace/resident/modal/livingModal";
import livingCultureImage from "@/image/no_image.jpg"; // TODO: 正式な画像を設定
import bird from "@/image/virtualSpace/icons/icon_3.png";
import bear from "@/image/virtualSpace/icons/icon_4.png";
import peach from "@/image/virtualSpace/icons/icon_5.png";
import birdTitle from "@/image/virtualSpace/modalTitleIcon/m_top_3.png";
import bearTitle from "@/image/virtualSpace/modalTitleIcon/m_top_4.png";
import peachTitle from "@/image/virtualSpace/modalTitleIcon/m_top_5.png";

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
        title: "水辺でのくらし",
        visual: "kuma",
        comment: "水の恵みを感じる！\n海や湖などが\n身近にある暮らし",
        commentDirection: "right",
        advisors: [
          {
            name: "○○",
            image: "image",
            id: "1",
          },
          {
            name: "○○",
            image: "image",
            id: "1",
          },
          {
            name: "○○",
            image: "image",
            id: "1",
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
      positionY: 48,
      positionX: 18,
    },
    modal: {
      content: {
        type: "living",
        icon: bearTitle,
        headerColor: "#99BC81",
        title: "自然豊かな山あいのくらし",
        visual: "kuma",
        comment: "自然とともに暮らす\nアウトドアを満喫\nできる暮らし",
        commentDirection: "right",
        advisors: [
          {
            name: "○○",
            image: "image",
            id: "1",
          },
          {
            name: "○○",
            image: "image",
            id: "1",
          },
          {
            name: "○○",
            image: "image",
            id: "1",
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
      positionY: 45,
      positionX: 47,
    },
    modal: {
      content: {
        type: "living",
        icon: peachTitle,
        headerColor: "#BD8E6B",
        title: "便利な街でのくらし",
        visual: "kuma",
        comment: "生活に便利な\n商業施設や娯楽施設が\nある街での暮らし",
        commentDirection: "left",
        advisors: [
          {
            name: "○○",
            image: "image",
            id: "1",
          },
          {
            name: "○○",
            image: "image",
            id: "1",
          },
          {
            name: "○○",
            image: "image",
            id: "1",
          },
        ],
      },
    },
  },
];
export default LivingRegidents;
