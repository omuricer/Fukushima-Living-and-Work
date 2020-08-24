import { Resident } from "@/app/resident/types";
import { LivingContent } from "@/components/virtualSpace/resident/modal/livingModal";

const LivingRegidents: Resident<LivingContent>[] = [
  {
    floor: 5,
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
        headerColor: "green",
        title: "山のあるくらし",
        visual: "kuma",
        comment: "ライフスタイル説明",
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
    key: "livingSea",
    icon: {
      image: "image/virtualSpace/icons/icon.png",
      positionX: 10,
      positionY: 10,
    },
    modal: {
      content: {
        type: "living",
        icon: "animal",
        headerColor: "blue",
        title: "海・湖のあるくらし",
        visual: "kuma",
        comment: "ライフスタイル説明",
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
    floor: 3,
    key: "livingCity",
    icon: {
      image: "image/virtualSpace/icons/icon.png",
      positionX: 10,
      positionY: 10,
    },
    modal: {
      content: {
        type: "living",
        icon: "animal",
        headerColor: "red",
        title: "街のあるくらし",
        visual: "kuma",
        comment: "ライフスタイル説明",
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
    floor: 6,
    key: "livingCulture",
    icon: {
      image: "image/virtualSpace/icons/icon.png",
      positionX: 10,
      positionY: 10,
    },
    modal: {
      content: {
        type: "living",
        icon: "animal",
        headerColor: "purple",
        title: "文化のあるくらし",
        visual: "kuma",
        comment: "ライフスタイル説明",
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
];
export default LivingRegidents;
