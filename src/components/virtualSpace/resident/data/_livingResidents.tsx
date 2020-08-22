import { Resident } from "@/app/resident/types";
import { LivingContent } from "@/components/virtualSpace/resident/modal/livingModal";

const LivingRegidents: Resident<LivingContent>[] = [
  {
    key: "livingMountain",
    icon: {
      image: "image/virtualSpace/icons/icon.png",
      positionX: 10,
      positionY: 10,
    },
    modal: {
      content: {
        type: "living",
        icon: "animal",
        title: "山のあるくらし",
        visual: "kuma",
        comment: "ライフスタイル説明",
        commentDirection: "right",
        advisors: [
          {
            name: "○○",
            image: "image",
          },
          {
            name: "○○",
            image: "image",
          },
          {
            name: "○○",
            image: "image",
          },
        ],
      },
    },
  },
  {
    key: "livingSea",
    icon: {
      image: "image/virtualSpace/icons/icon.png",
      positionX: 10,
      positionY: 30,
    },
    modal: {
      content: {
        type: "living",
        icon: "animal",
        title: "海・湖のあるくらし",
        visual: "kuma",
        comment: "ライフスタイル説明",
        commentDirection: "right",
        advisors: [
          {
            name: "○○",
            image: "image",
          },
          {
            name: "○○",
            image: "image",
          },
          {
            name: "○○",
            image: "image",
          },
        ],
      },
    },
  },
  {
    key: "livingCity",
    icon: {
      image: "image/virtualSpace/icons/icon.png",
      positionX: 10,
      positionY: 50,
    },
    modal: {
      content: {
        type: "living",
        icon: "animal",
        title: "街のあるくらし",
        visual: "kuma",
        comment: "ライフスタイル説明",
        commentDirection: "right",
        advisors: [
          {
            name: "○○",
            image: "image",
          },
          {
            name: "○○",
            image: "image",
          },
          {
            name: "○○",
            image: "image",
          },
        ],
      },
    },
  },
  {
    key: "livingCulture",
    icon: {
      image: "image/virtualSpace/icons/icon.png",
      positionX: 10,
      positionY: 70,
    },
    modal: {
      content: {
        type: "living",
        icon: "animal",
        title: "文化のあるくらし",
        visual: "kuma",
        comment: "ライフスタイル説明",
        commentDirection: "right",
        advisors: [
          {
            name: "○○",
            image: "image",
          },
          {
            name: "○○",
            image: "image",
          },
          {
            name: "○○",
            image: "image",
          },
        ],
      },
    },
  },
];
export default LivingRegidents;
